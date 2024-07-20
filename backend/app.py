#!/usr/bin/env python3

""" Main application file that initializes the Flask app and the database.
"""

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///webapp.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

import routes

with app.app_context():  # Create tables in the database if they don't exist
  db.create_all()


if __name__ == '__main__':
  app.run(debug=True)
