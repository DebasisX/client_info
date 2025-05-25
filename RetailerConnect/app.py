from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# MongoDB Configuration
client = MongoClient("mongodb://localhost:27017/")
db = client["retailer_db"]
collection = db["retailers"]

@app.route("/signup", methods=["POST"])
def signup():
    try:
        data = request.get_json()
        required_fields = ["name", "phone", "email", "password", "pan", "gstr"]
        
        # Validate required fields
        if not all(field in data for field in required_fields):
            return jsonify({"error": "All fields are required"}), 400

        # Check for existing user
        existing_user = collection.find_one({
            "$or": [
                {"email": data["email"]},
                {"phone": data["phone"]},
                {"pan": data["pan"]},
                {"gstr": data["gstr"]}
            ]
        })
        if existing_user:
            conflict_fields = []
            if existing_user["email"] == data["email"]: conflict_fields.append("email")
            if existing_user["phone"] == data["phone"]: conflict_fields.append("phone")
            if existing_user["pan"] == data["pan"]: conflict_fields.append("PAN")
            if existing_user["gstr"] == data["gstr"]: conflict_fields.append("GSTIN")
            return jsonify({"error": f"User exists with: {', '.join(conflict_fields)}"}), 409

        # Insert new retailer
        result = collection.insert_one(data)
        return jsonify({
            "message": "Signup successful",
            "id": str(result.inserted_id)
        }), 201

    except Exception as e:
        print(f"Server Error: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

@app.route("/api/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        user = collection.find_one({
            "$or": [
                {"email": data.get("identifier")},
                {"phone": data.get("identifier")}
            ]
        })

        if not user or user["password"] != data.get("password"):
            return jsonify({"error": "Invalid credentials"}), 401
            
        return jsonify({
            "message": "Login successful",
            "user_id": str(user["_id"])
        }), 200

    except Exception as e:
        print(f"Login Error: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)