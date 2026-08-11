# 🤖 My AI Chatbot

> A modern local AI chatbot web application powered by **Llama 3.2**, **Ollama**, and **Flask**, with text and voice-based interaction.

## 📌 Overview

**My AI Chatbot** is a web-based conversational AI application designed to provide an interactive and user-friendly chat experience using a locally running Large Language Model (LLM).

The application uses **Flask** as the backend, **Ollama** to run the Llama 3.2 model locally, and **HTML, CSS, and JavaScript** for the frontend.

It supports both **text and voice interaction**, dark/light mode, chat history, timestamps, AI voice responses, and other modern chatbot features.

---

## ✨ Features

* 🤖 **AI Chat** — Conversational responses using Llama 3.2
* 🎤 **Voice Input** — Speak instead of typing
* 🔊 **AI Voice Reply** — AI responses can be spoken aloud
* 🌙 **Dark / Light Mode** — Switch between themes
* 💾 **Chat History** — Conversations are stored using browser LocalStorage
* 🗑️ **Clear Chat** — Remove the current conversation
* 📋 **Copy Response** — Copy AI responses with one click
* 🕐 **Message Timestamps** — Displays the time of each message
* ⏳ **Typing Indicator** — Shows when the AI is processing a response
* ⌨️ **Enter-to-Send** — Send messages using the Enter key
* 📱 **Responsive Design** — Designed for desktop and mobile screens
* 🔒 **Local AI Processing** — AI inference runs locally through Ollama

---

## 🖥️ Application Preview

Add screenshots of your chatbot here after taking them from the running application.

```text
screenshots/
├── chatbot-light.png
├── chatbot-dark.png
└── chatbot-voice.png
```

Example:

```markdown
![AI Chatbot Light Mode](screenshots/chatbot-light.png)
```

---

## 🏗️ System Architecture

```text
┌─────────────────────────────┐
│       User Interface        │
│     HTML + CSS + JavaScript │
└──────────────┬──────────────┘
               │
               │ HTTP POST /chat
               ▼
┌─────────────────────────────┐
│       Flask Backend         │
│          app.py             │
└──────────────┬──────────────┘
               │
               │ HTTP Request
               ▼
┌─────────────────────────────┐
│           Ollama            │
│        Llama 3.2 Model      │
└──────────────┬──────────────┘
               │
               │ AI Response
               ▼
┌─────────────────────────────┐
│       Chatbot Interface     │
│ Text + Voice Response       │
└─────────────────────────────┘
```

---

## 🛠️ Technologies Used

| Technology         | Purpose                                 |
| ------------------ | --------------------------------------- |
| **HTML5**          | Chatbot structure                       |
| **CSS3**           | UI design, themes and responsive layout |
| **JavaScript**     | Chat functionality and browser features |
| **Python**         | Backend programming                     |
| **Flask**          | Web server and REST API                 |
| **Ollama**         | Local LLM runtime                       |
| **Llama 3.2**      | AI language model                       |
| **LocalStorage**   | Client-side chat history                |
| **Web Speech API** | Voice input and AI voice output         |
| **Git & GitHub**   | Version control and project hosting     |

---

## 📁 Project Structure

```text
my-ai-chatbot/
│
├── app.py
├── test_chat.py
├── README.md
├── .gitignore
│
└── static/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ⚙️ Requirements

Before running the project, install the following:

* Python 3.x
* Flask
* Requests
* Ollama
* Llama 3.2 model
* Modern web browser such as Google Chrome

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/srivanigunturi796-lab/my-ai-chatbot.git
```

```bash
cd my-ai-chatbot
```

### 2. Install Python Dependencies

```bash
pip install flask requests
```

### 3. Install Ollama

Install Ollama on your computer and make sure the Ollama service is running.

Then download the Llama 3.2 model:

```bash
ollama pull llama3.2
```

### 4. Start the Flask Backend

```bash
python app.py
```

The application will run at:

```text
http://127.0.0.1:5000
```

### 5. Open the Application

Open the above address in Google Chrome or another supported browser.

---

## 💬 Example Interaction

```text
User:
What is Python?

AI:
Python is a high-level, general-purpose programming language
known for its simple syntax and wide range of applications.
```

The user can also use the 🎤 microphone button to provide voice input.

---

## 🔊 Voice Interaction

The chatbot uses browser-based speech technologies:

### Voice Input

```text
User speaks
     ↓
Speech Recognition
     ↓
Text Input
     ↓
Flask API
     ↓
Llama 3.2
```

### Voice Output

```text
Llama 3.2 Response
        ↓
JavaScript
        ↓
Speech Synthesis
        ↓
AI Voice
```

---

## 💾 Chat History

Chat messages are stored locally in the browser using:

```text
localStorage
```

This allows previous conversations to remain available after refreshing the page.

Users can remove the stored conversation using the **Clear Chat** button.

---

## 🔐 Privacy

This project is designed around **local AI processing** using Ollama.

The chatbot does not require sending prompts to a third-party cloud AI API for its core Llama 3.2 response generation.

> Do not commit passwords, API keys, tokens, or other sensitive information to GitHub.

---

## 🎯 Project Objectives

The main objectives of this project are:

1. Build a functional AI chatbot web application.
2. Integrate a locally running Large Language Model.
3. Develop a Flask-based backend API.
4. Create a responsive and modern chatbot interface.
5. Support both text and voice interaction.
6. Implement browser-based chat history.
7. Provide a user-friendly AI assistant experience.

---

## 🔮 Future Enhancements

Possible future improvements include:

* 🌐 Multi-language voice support
* 👤 User authentication
* ☁️ Cloud-based conversation synchronization
* 📎 File and document upload
* 🧠 Retrieval-Augmented Generation (RAG)
* 📚 Conversation search
* 🗂️ Multiple chat sessions
* ⚙️ AI model selection
* 📊 Chat analytics
* 📱 Progressive Web App support

---

## 🧪 Testing

The application can be tested for:

* AI response generation
* API communication
* Voice input
* Voice output
* Dark/light theme switching
* Chat history persistence
* Clear chat functionality
* Copy response functionality
* Message timestamps
* Responsive layout

---

## 👩‍💻 Author

**Srivani Gunturi**

B.Tech – Computer Science and Data Science

---

## ⭐ Acknowledgements

This project uses open-source technologies including:

* Flask
* Ollama
* Llama 3.2
* Web Speech API
* HTML
* CSS
* JavaScript

---

## 📄 License

This project is intended for **educational and academic purposes**.

You may modify and extend the project for learning and development.
