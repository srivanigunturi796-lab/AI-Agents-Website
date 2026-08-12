# 🤖 AI Agents Website

A modern, responsive AI chatbot web application built with **HTML, CSS, JavaScript, Flask, and Groq AI**. The application provides an interactive chat experience with voice input, dark mode, chat history, and a deployed cloud backend.

## 🌐 Live Demo

🚀 **[Open AI Agents Website](https://srivanigunturi796-lab.github.io/AI-Agents-Website/)**

## 📂 GitHub Repository

💻 **[View Source Code](https://github.com/srivanigunturi796-lab/AI-Agents-Website)**

---

## ✨ Features

* 🤖 AI-powered conversational chatbot
* 💬 Real-time chat interface
* 🎤 Voice input using Web Speech API
* 🌙 Dark / Light mode
* 💾 Chat history using Local Storage
* 🧹 Clear chat functionality
* ⌨️ Enter key support for sending messages
* 📱 Responsive user interface
* 🔗 Frontend-backend API integration
* 🚀 Cloud deployment using Render
* ⚡ Fast AI responses using Groq
* 🔐 API key stored securely as an environment variable

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Web Speech API
* Local Storage
* Fetch API

### Backend

* Python
* Flask
* Flask-CORS
* REST API

### AI

* Groq API
* Llama 3.1 8B Instant

### Deployment

* GitHub Pages — Frontend
* Render — Backend
* GitHub — Version Control

---

## 🏗️ Project Architecture

```text
                    ┌──────────────────────┐
                    │      User Browser    │
                    │   HTML / CSS / JS    │
                    └──────────┬───────────┘
                               │
                               │ HTTP POST /chat
                               ▼
                    ┌──────────────────────┐
                    │    Flask Backend     │
                    │      REST API        │
                    └──────────┬───────────┘
                               │
                               │ API Request
                               ▼
                    ┌──────────────────────┐
                    │      Groq API        │
                    │   Llama 3.1 Model    │
                    └──────────┬───────────┘
                               │
                               │ AI Response
                               ▼
                    ┌──────────────────────┐
                    │    Chat Interface    │
                    │   Displays Response  │
                    └──────────────────────┘
```

---

## 📁 Project Structure

```text
AI-Agents-Website/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── backend/
    ├── app.py
    └── requirements.txt
```

---

## ⚙️ How It Works

1. The user enters a message in the chatbot.
2. JavaScript captures the message.
3. The frontend sends the message to the Flask `/chat` API.
4. Flask receives the request.
5. The backend sends the message to the Groq API.
6. The AI model generates a response.
7. Flask returns the response as JSON.
8. JavaScript displays the AI response in the chat interface.
9. Chat history is stored locally in the browser.

---

## 🚀 Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/srivanigunturi796-lab/AI-Agents-Website.git
cd AI-Agents-Website
```

### 2. Install backend dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 3. Configure the API key

Create an environment variable named:

```text
GROQ_API_KEY
```

Do **not** commit your API key to GitHub.

### 4. Start the Flask backend

```bash
gunicorn app:app
```

For local development, you can also run:

```bash
python app.py
```

### 5. Open the frontend

Open `index.html` in your browser or run it using a local development server.

---

## 🔐 Environment Variables

The backend requires:

```text
GROQ_API_KEY=your_api_key_here
```

For security, API keys should be stored in environment variables and never directly inside frontend JavaScript or committed to GitHub.

---

## 🌍 Deployment

### Frontend

The frontend is deployed using **GitHub Pages**.

### Backend

The Flask backend is deployed using **Render**.

### Deployment Flow

```text
GitHub Repository
       │
       ├── Frontend ──► GitHub Pages
       │
       └── Backend ───► Render
                            │
                            ▼
                         Groq API
```

---

## 📸 Project Preview

### Chat Interface

*Add your project screenshot here.*

```text
![AI Agents Website](screenshot.png)
```

You can replace `screenshot.png` with the actual screenshot filename after uploading it to the repository.

---

## 🎯 Future Enhancements

* 🔊 AI voice responses using Text-to-Speech
* 👤 User authentication
* 🗂️ Multiple AI agents for different tasks
* 📊 Conversation analytics
* 🧠 Improved conversation memory
* 📱 Progressive Web App support
* 🎨 More customizable themes
* 📄 Export conversations
* 🔍 AI-powered web search integration

---

## 🎓 Learning Outcomes

Through this project, I practiced:

* Frontend web development
* JavaScript API integration
* REST API development
* Flask backend development
* AI API integration
* CORS configuration
* Environment variable management
* Git and GitHub
* Cloud deployment
* Debugging production deployment issues

---

## 👩‍💻 Author

**Srivani Gunturi**

B.Tech – Computer Science and Data Science

Interested in:

* Artificial Intelligence
* Data Science
* Web Development
* AI Agents
* Software Development

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📜 License

This project is created for educational and portfolio purposes.
