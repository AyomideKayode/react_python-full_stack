#!/usr/bin/env python3

""" Main application file that initializes the Flask app and the database.
"""

from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///webapp.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

frontend_folder = os.path.join(os.getcwd(), "..", "frontend")  # Path to the frontend folder
dist_folder = os.path.join(frontend_folder, "dist")  # Path to the dist folder where the React app is built

# Serve static files from the "dist" folder under the "frontend" directory
@app.route('/', defaults={"filename":""})
@app.route('/<path:filename>')
def index(filename):  # Serve the index.html file
    if not filename:
        filename = "index.html"  # If no filename is provided, serve index.html 
    return send_from_directory(dist_folder, filename)

import routes  # api routes

with app.app_context():  # Create tables in the database if they don't exist
    db.create_all()


if __name__ == '__main__':
    app.run(debug=True)
