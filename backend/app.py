from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise ValueError("OPENAI_API_KEY is not set")

client = OpenAI(api_key=api_key)


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
            return jsonify({"error": "Invalid request"}), 400

        message = data.get("message", "").strip()

        if not message:
            return jsonify({"error": "Message is required"}), 400

        response = client.responses.create(
            model="gpt-4o-mini",
            input=message
        )

        return jsonify({
            "reply": response.output_text
        })

    except Exception as e:
        print("OPENAI ERROR:", repr(e))
        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)