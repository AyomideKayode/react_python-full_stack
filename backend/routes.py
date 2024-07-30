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
            # Check if the required fields are present in the request data
            if field not in data or not data.get(field):
                return jsonify({
                    "error": f'Missing required field: {field}'}), 400

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

        new_friend = Friend(
            name=name, role=role, description=description, gender=gender, img_url=img_url)

        db.session.add(new_friend)
        db.session.commit()
        # Return a success message
        return jsonify(new_friend.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500  # Return an error message


# delete
@app.route('/api/friends/<int:id>', methods=['DELETE'])
def delete_friend(id):
    """ Route that deletes a friend from the database.
    """
    try:
        friend = Friend.query.get(id)
        if friend is None:
            return jsonify({"error": "Oops, friend not found."}), 404
        # secure changes in the database
        db.session.delete(friend)
        db.session.commit()
        return jsonify({"msg": "Friend deleted."}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


# update friend profile
@app.route('/api/friends/<int:id>', methods=['PATCH'])
def update_friend(id):
    """ Route that updates a friend's profile in the database.
    """
    try:
        friend = Friend.query.get(id)
        if friend is None:
            return jsonify({"error": "Oops, friend not found."}), 404

        data = request.json  # Get the JSON data from the request
        # update the friend's profile with new data as provided in the request
        # if the data is not provided, retain the old data
        friend.name = data.get("name", friend.name)
        friend.role = data.get("role", friend.role)
        friend.description = data.get("description", friend.description)
        friend.gender = data.get("gender", friend.gender)

        db.session.commit()  # save changes to db
        return jsonify(friend.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
