```python
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from groq import Groq
import os

load_dotenv()

app = Flask(__name__)

# Allow the live frontend to access this backend
CORS(
    app,
    resources={
        r"/chat": {
            "origins": [
                "https://ai-agents-website.onrender.com"
            ]
        }
    }
)

api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    raise ValueError("GROQ_API_KEY is not set")

client = Groq(api_key=api_key)


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "success",
        "message": "AI Agents Backend is running!"
    })


@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()

        if not data:
            return jsonify({
                "error": "Invalid request"
            }), 400

        message = data.get("message", "").strip()

        if not message:
            return jsonify({
                "error": "Message is required"
            }), 400

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {
                    "role": "user",
                    "content": message
                }
            ]
        )

        reply = response.choices[0].message.content

        return jsonify({
            "reply": reply
        })

    except Exception as e:
        print("GROQ ERROR:", repr(e))

        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run()
```
