from app import app

"""
Gunicorn and WSGI (Web Server Gateway Interface) are both components used in
deploying and serving Python web applications,
particularly those built with web frameworks like Flask and Django.
Gunicorn is a WSGI HTTP server that can run multiple workers to handle
multiple requests concurrently.
WSGI is a specification that describes how a web server communicates
with web applications.
Gunicorn is used to run the Flask application in production.
The `wsgi.py` file is used to run the Flask application with Gunicorn.
The `if __name__ == '__main__':` block is used to run the Flask application
in development mode.
When the `wsgi.py` file is executed directly, the Flask application
runs in debug mode.
When the `wsgi.py` file is imported by Gunicorn, the Flask application
runs in production mode.
"""

if __name__ == '__main__':
    app.run(debug=True)
