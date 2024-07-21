#!/usr/bin/env python3

""" Module that defines the routes for the Friend model.
"""

from app import app, db
from flask import request, jsonify
from models import Friend


# route to get all friends
@app.route('/api/friends', methods=['GET'])
def get_friends():
    """ Route that returns all friends in the database.
    """
    friends = Friend.query.all()
    result = [friend.to_json() for friend in friends]
    return jsonify(result)


# create a new friend
@app.route('/api/friends', methods=['POST'])
def create_friend():
    """ Route that creates a new friend in the database.
    """
    try:
        data = request.json  # Get the JSON data from the request

        required_fields = ["name", "role", "description", "gender"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error":f'Missing required field: {field}'}), 400

        name = data.get("name")
        role = data.get("role")
        description = data.get("description")
        gender = data.get("gender")
        # Fetch avatar based on gender using external api to get image url
        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
        else:
            img_url = None

        new_friend = Friend(name=name, role=role, description=description, gender=gender, img_url=img_url)

        db.session.add(new_friend)
        db.session.commit()
        # Return a success message
        return jsonify({"msg": "Friend created successfully"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500  # Return an error message
