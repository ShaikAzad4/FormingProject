from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from groq import Groq
from dotenv import load_dotenv
load_dotenv()
# Initialize Groq client
# IMPORTANT: Replace with your actual Groq API key

import os
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
client = Groq(api_key=GROQ_API_KEY)

# System prompt for the farming assistant
SYSTEM_PROMPT = """You are an expert farming assistant specializing in organic agriculture. 
You provide accurate, practical advice about crop cultivation, pest management, soil health, 
and sustainable farming practices. Base your answers on established agricultural knowledge 
and organic farming principles. Keep responses concise, practical, and focused on the specific 
crop and context provided.If topic is not about the agriculture,crops,forming,forms kindly respond as i don't know. You have to respond only if the question is about farming, agriculture, crops, forms.And you should always talk about organic way of the farming not using any chemical farming, if you are mentioning any organic ferticlizers then specifically tell as it is organic fertilizer never go to talk beyond the organic farming."""

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'Farming Assistant API is running'})

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')
        crop_context = data.get('cropContext', '')
        
        # Create conversation messages
        messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "system", "content": f"Context about the current crop: {crop_context}"},
            {"role": "user", "content": user_message}
        ]
        
        # Call Groq API
        completion = client.chat.completions.create(
            model= "openai/gpt-oss-120b",  # Free model
            messages=messages,
            temperature=0.7,
            max_tokens=1024,
            top_p=1,
            stream=False
        )
        
        reply = completion.choices[0].message.content
        
        return jsonify({
            'success': True,
            'reply': reply
        })
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({
            'success': False,
            'reply': 'Sorry, I encountered an error. Please try again later.'
        }), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)

# import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
