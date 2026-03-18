🚀 Task Management Application (Full Stack)

📌 Project Overview

This is a production-ready Task Management Application built as part of a Full Stack Developer technical assessment. The application allows users to securely manage their tasks with authentication, authorization, and advanced backend features.

🔐 Authentication & Security

User Registration & Login

JWT-based Authentication

Password hashing using bcrypt

Secure token storage using HTTP-only cookies

Protected routes (Frontend + Backend)

Input validation & error handling

📋 Task Management

Create, Read, Update, Delete (CRUD) tasks

Each task contains:

Title

Description

Status (Pending / Completed)

Created Date

Users can only access their own tasks

🔍 Advanced Functionalities

Pagination for task listing

Filter tasks by status

Search tasks by title

Clean and simple UI

🛡️ Security Practices

Secure cookies (HttpOnly, Secure flags)

Environment variables for sensitive data

Prevention of common vulnerabilities (basic injection protection)

Proper HTTP status codes

🛠️ Tech Stack
Backend:

Node.js

Express.js

Frontend:

React.js / Next.js

Database:

MongoDB

⚙️ Setup Instructions

1️⃣ Clone Repository
git clone [https://github.com/A/task-manager.git](https://github.com/Anuj0705/task-manager-fullstack)
cd task-manager

2️⃣ Backend Setup
cd backend
npm install

Create a .env file:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/taskmanager

JWT_SECRET=secret123

Run backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm start

🌐 API Endpoints

🔑 Auth Routes
Method	Endpoint	Description
POST	/api/register	Register user
POST	/api/login	Login user
POST	/api/logout	Logout user

📌 Task Routes
Method	Endpoint	Description
GET	/api/tasks	Get all tasks (paginated)
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task

🔍 Sample Request
Create Task
POST /api/tasks

{
  "title": "Complete Assignment",
  "description": "Finish full stack project",
  "status": "pending"
}

📊 Architecture Overview

Frontend communicates with backend via REST APIs

Backend handles:

Authentication

Business logic

Database operations

Database stores users & tasks

JWT ensures secure communication between client & server

🚀 Deployment

Backend hosted on: (e.g., Render)

Frontend hosted on: (e.g., Vercel)

🧪 Testing

You can test APIs using:

Postman

Thunder Client

📌 Future Improvements

Add role-based access (Admin/User)

Add task deadlines & reminders

Implement real-time updates (WebSockets)

Improve UI/UX

👨‍💻 Author

Patel Anuj

📜 License

This project is for educational and assessment purposes.
