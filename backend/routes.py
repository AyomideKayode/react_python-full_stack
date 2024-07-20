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
