# Calculator Frontend

Frontend interface for the Front-End and Back-End Separation Calculator System.

This project provides the user interface for interacting with the calculator backend through HTTP APIs.

The frontend is responsible for:

- User input handling
- Calculator interface display
- Sending requests to backend APIs
- Displaying calculation results
- Displaying calculation history
- Deleting history records


---

# Technology Stack

## Frontend Technologies

- HTML5
- CSS3
- JavaScript (ES6)

## Communication

The frontend communicates with the Flask backend using:

- HTTP requests
- JSON data


---

# Project Structure
calculator_frontend

├── index.html
│ Main webpage structure

├── style.css
│ Page styling and layout

├── app.js
│ Frontend logic and API communication

├── README.md
│ Project documentation

└── codestyle.md
Coding conventions



---

# Features


## Calculator Interface

The frontend provides:

- Number input
- Mathematical operator input
- Calculation button
- Result display


---

## Backend API Integration

The frontend sends expressions to the backend.

Example request:

```json
{
    "expression": "1+2*3"
}

The backend returns the calculation result.

Example response:

{
    "success": true,
    "result": 7
}
Calculation History

The frontend supports:

Loading previous calculations
Displaying history records
Deleting history records
Running the Frontend
Method 1: Open Directly

Open:

index.html

in a web browser.

Method 2: VS Code Live Server

Install Live Server extension.

Right click:

index.html

Select:

Open with Live Server
Backend Connection

The frontend communicates with the backend server.

Default backend address:

http://127.0.0.1:5000

API examples:

POST /api/calculate

GET /api/history

DELETE /api/history/<id>
Development Notes

The frontend does not perform the core calculation.

All mathematical processing is handled by the backend service.

The frontend only manages:

User interaction
Data transmission
Result presentation