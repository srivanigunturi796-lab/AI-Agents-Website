const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");
const clearBtn = document.getElementById("clearBtn");
const themeBtn = document.getElementById("themeBtn");
const micBtn = document.getElementById("micBtn");

function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.textContent = message;

    messageDiv.appendChild(bubble);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function saveChat() {
    localStorage.setItem("chatHistory", chatBox.innerHTML);
}

function loadChat() {
    const history = localStorage.getItem("chatHistory");

    if (history) {
        chatBox.innerHTML = history;
    }
}

async function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");
    saveChat();

    messageInput.value = "";

    sendBtn.disabled = true;
    typing.style.display = "block";

    try {

        const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        if (data.reply) {

    addMessage(data.reply, "bot");
    saveChat();

} else {

    addMessage(
        "Backend Error: " + (data.error || "Unknown error"),
        "bot"
    );

    saveChat();
}

    } catch (error) {

        console.error(error);

        addMessage(
            "Unable to connect to the AI server.",
            "bot"
        );

        saveChat();
    }

    typing.style.display = "none";
    sendBtn.disabled = false;
    messageInput.focus();
}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});

clearBtn.addEventListener("click", function() {

    chatBox.innerHTML = `
        <div class="message bot">
            <div class="bubble">
                Chat cleared! 👋
                How can I help you?
            </div>
        </div>
    `;

    localStorage.removeItem("chatHistory");
});

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    micBtn.addEventListener("click", function() {

        try {
            recognition.start();

            micBtn.classList.add("listening");
            micBtn.textContent = "🔴";

        } catch (error) {
            console.log("Voice recognition already running.");
        }

    });

    recognition.onresult = function(event) {

        const text =
            event.results[0][0].transcript;

        messageInput.value = text;
    };

    recognition.onend = function() {

        micBtn.classList.remove("listening");
        micBtn.textContent = "🎤";
    };

    recognition.onerror = function(event) {

        console.log("Voice error:", event.error);

        micBtn.classList.remove("listening");
        micBtn.textContent = "🎤";
    };

} else {

    micBtn.disabled = true;
    micBtn.title =
        "Voice input is not supported by this browser.";
}

loadChat();