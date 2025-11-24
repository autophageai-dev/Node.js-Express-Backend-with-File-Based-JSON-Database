🟦 Simple Node App

This is a basic Express backend with a file-based JSON “database”

Route organization

Environment variables

A simple frontend that calls the API

A minimal user + notes system

🚀 Features
✔ Backend API (Express)

GET /users — list all users

POST /users — create a new user

GET /notes — list all notes

POST /notes — create a new note

✔ File-Based Database

Simple JSON files under /data store:

users.json

notes.json

This keeps the project dependency-free and easy to understand.

✔ Organized Routing

All routes live in /routes:

routes/
 ├── userRoutes.js
 └── noteRoutes.js

✔ Simple Frontend

A lightweight HTML page at /public/index.html that:

Creates users

Creates notes

Displays user lists

Displays notes

Calls the backend using fetch()

✔ Environment Variables

Using .env for:

PORT=3000
APP_NAME="Simple Node App"

📁 Project Structure
simple-node-app/
 ├── server.js
 ├── package.json
 ├── .env
 ├── routes/
 │     ├── userRoutes.js
 │     └── noteRoutes.js
 ├── db/
 │     └── fileDb.js
 ├── data/
 │     ├── users.json
 │     └── notes.json
 ├── public/
 │     └── index.html
 └── README.md

🛠 Tech Stack

Node.js

Express.js

Vanilla HTML + JavaScript

File-based JSON storage (no DB required)

dotenv for environment variables

No frameworks. No databases. No complexity.
Perfect for learning.

📦 Installation

Clone or download the project:

git clone https://github.com/yourusername/simple-node-app.git
cd simple-node-app


Install dependencies:

npm install


Create your .env file:

PORT=3000
APP_NAME="Simple Node App"


Start the server:

npm start


Server runs at:

http://localhost:3000

🧪 API Usage
➤ List Users
GET /users

➤ Create User
POST /users
Content-Type: application/json


Body:

➤ List Notes
GET /notes

➤ Create Note
POST /notes
Content-Type: application/json


Body:

{
  "text": "My first note",
  "userId": 12345
}

🖥 Frontend Usage

Open in browser:

http://localhost:3000


From here you can:

Create users

Create notes

See lists update live

The frontend communicates via JavaScript fetch() calls.
