from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

@app.route("/")
def home():
    return {"message": "Hello World"}

if __name__ == "__main__":
    app.run(debug=True, port=5000)

# cd flask-react-app/flask-backend
# source .venv/Scripts/activate
# python server.py 