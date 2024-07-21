# Python and React App

```bash
(web_venv) ayomide@Kazzywiz:~/react_python-full_stack/backend$ python3 app.py 
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 139-713-209
127.0.0.1 - - [20/Jul/2024 11:15:50] "GET / HTTP/1.1" 404 -
127.0.0.1 - - [20/Jul/2024 11:15:53] "GET /favicon.ico HTTP/1.1" 404 -
127.0.0.1 - - [20/Jul/2024 11:15:55] "GET /contacts HTTP/1.1" 404 -
127.0.0.1 - - [20/Jul/2024 11:16:01] "GET /api/friends HTTP/1.1" 404 -
^C(web_venv) ayomide@Kazzywiz:~/react_python-full_stack/backend$ export FLASK_APP=app.py
(web_venv) ayomide@Kazzywiz:~/react_python-full_stack/backend$ export FLASK_ENV=development
(web_venv) ayomide@Kazzywiz:~/react_python-full_stack/backend$ flask run
```

- Making use of avatars from an external API

## Sending a POST Request with JSON Data

- To test the API's functionality for creating a new friend record, I utilized Postman, a popular API testing tool.
- Also available as a VSCode extension.

Here's the step-by-step process I followed:

- Set the URL: Entered the endpoint URL (`http://127.0.0.1:5000/api/friends`) in Postman's address bar.
- Choose the HTTP Method: Selected `POST` from the HTTP method dropdown.
- Set the Headers: Added a new header with `Key: Content-Type` and `Value: application/json` to ensure the server processes the request as JSON.
- Set the Body: Chose the `raw` option under the `Body` tab, selected `JSON` from the dropdown, and input the JSON data:

```json
{
    "name": "Ayomide Kayode", whatever you like
    "role": "Developer",
    "description": "A skilled full stack developer😁",
    "gender": "male"
}
```

- Send the Request: Clicked the `Send` button to submit the request.

Upon correctly setting the headers and body, the server successfully processed the request, resulting in a success message confirming the creation of the new friend record. This step is crucial for ensuring that the server understands the format of the incoming data and can handle it appropriately.
