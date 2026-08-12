# 🤖 AI Agents Website

A modern AI-powered chatbot web application with a responsive user interface, voice input, dark mode, chat history, and a cloud-deployed AI backend.

## 🚀 Live Demo

**Frontend:**
https://srivanigunturi796-lab.github.io/AI-Agents-Website/

**Backend:**
https://ai-agents-website-my.onrender.com/

## ✨ Features

* 💬 AI-powered chatbot
* 🎤 Voice input using browser Speech Recognition
* 🌙 Dark / Light mode
* 💾 Chat history using Local Storage
* 🧹 Clear chat functionality
* ⌨️ Enter key support for sending messages
* 📱 Responsive user interface
* 🔗 Frontend and backend integration
* ☁️ Cloud deployment using Render
* 🔐 API key stored securely as an environment variable

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Web Speech API
* Local Storage

### Backend

* Python
* Flask
* Flask-CORS
* Groq API

### Deployment & Tools

* Git
* GitHub
* GitHub Pages
* Render
* VS Code

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
    ├── requirements.txt
    └── README.md
```

## 🔄 How It Works

```text
User
  │
  ▼
Frontend Chat Interface
  │
  │ POST /chat
  ▼
Flask Backend
  │
  ▼
Groq AI API
  │
  ▼
AI Response
  │
  ▼
Chat Interface
```

## ⚙️ Local Setup

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

Create an environment variable for your Groq API key.

Do **not** upload your API key to GitHub.

Example:

```text
GROQ_API_KEY=your_api_key_here
```

### 4. Run the backend

```bash
python app.py
```

### 5. Open the frontend

Open `index.html` in your browser or run it using a local development server.

## 🔐 Security

API credentials are not stored directly in the source code.

Environment variables are used to keep API keys separate from the public repository.

**Never commit `.env` files or API keys to GitHub.**

## 📌 Future Improvements

* 🧠 Advanced AI agent workflows
* 💬 Improved conversation memory
* 🔊 Text-to-Speech responses
* 📄 File upload and document analysis
* 🧩 Multiple specialized AI agents
* 📊 AI usage analytics
* 📱 Improved mobile experience
* ⚡ Streaming AI responses

## 🎯 Project Goal

The goal of this project is to build a practical AI-agent-based web application while learning and applying frontend development, backend API development, AI integration, cloud deployment, Git, and GitHub.

## 👩‍💻 Developer

**Srivani Gunturi**

B.Tech – Computer Science and Data Science

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

**Built with ❤️ using HTML, CSS, JavaScript, Python, Flask, and AI.**
