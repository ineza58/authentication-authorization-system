# 🔐 Authentication and Authorization System

## 📌 Project Title
Authentication and Authorization System using Node.js, Express, MySQL, and JWT

---

## 📖 Project Description
This project implements a complete authentication and authorization system for a web application.  
It demonstrates how users can securely register, log in, and access protected resources based on:
- Their identity (authentication)
- Their role (RBAC)
- Their attributes (ABAC)
- Ownership of resources
- Custom business rules

The system ensures:
- Passwords are never stored in plain text
- Access to resources is controlled and secure
- Tokens are used for stateless authentication

---

## 🎯 Project Objectives
The main objectives of this project are:
- To implement secure user registration using hashed passwords  
- To authenticate users using JSON Web Tokens (JWT)  
- To protect routes using authentication middleware  
- To restrict access using Role-Based Access Control (RBAC)  
- To restrict access using Attribute-Based Access Control (ABAC)  
- To ensure users can only access their own resources  
- To implement business-specific authorization rules  

---

## ⚙️ Technologies Used
- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework  
- **MySQL** – Relational database  
- **bcrypt** – Password hashing  
- **JSON Web Token (JWT)** – Token-based authentication  
- **Postman** – API testing  

---

## 🗄️ Database Design

### Users Table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin','user','manager'),
  department VARCHAR(50),
  status ENUM('active','inactive') DEFAULT 'active'
);

Explanation of Columns

id – Unique identifier for each user

username – Unique login name

password – Hashed password

role – Determines user permissions

department – Used for attribute-based access

status – Active or inactive user

🔑 Functional Requirements
Step 4: User Registration

Endpoint: POST /register

Accepts:

username

password

role (admin / user / manager)

department

Hashes password using bcrypt before storing

Ensures username is unique

Step 5: Login and JWT Issuing

Endpoint: POST /login

Fetches user from database by username

Compares entered password with stored hashed password

If valid:

Generates JWT token

Token contains:

user ID

role

department

Token has expiration time

Step 6: Authentication Middleware

Reads JWT from Authorization header

Verifies token signature

Checks token expiration

Decodes token payload

Attaches decoded user data to request object

Step 7: Role-Based Access Control (RBAC)

Restricts routes based on user role

Examples:

Admin-only routes

Admin and Manager routes

Public authenticated routes

Step 8: Attribute-Based Access Control (ABAC)

Uses user attributes from JWT (department)

Example rules:

Finance users can access finance resources

IT users can access IT tools

Step 9: Resource Ownership (ABAC)

Users can only access their own data

Admin can access all users’ data

Compares:

Token user ID

Requested resource ID

Step 10: Custom Authorization Rules

Business-specific rules implemented:

Allow access only during working hours

Block inactive users

Combine role + attribute + time rules

Provide clear error messages

🔐 Security Features

Password hashing using bcrypt

JWT token expiration

Role-based route protection

Attribute-based route protection

Ownership validation

Middleware-based security

▶ How to Run the Project
1. Clone Repository
git clone https://github.com/YOUR_USERNAME/authentication-authorization-system.git

2. Install Dependencies
npm install

3. Create Database
CREATE DATABASE auth_system;
USE auth_system;

4. Start Server
node server.js

🧪 API Endpoints
Method	Endpoint	Description
POST	/register	Register new user
POST	/login	Login and receive JWT
GET	/admin	Admin-only route
GET	/manager	Admin & Manager route
GET	/finance	Finance department route
GET	/users/:id	Resource ownership
GET	/secure-data	Custom rule route
📂 Project Structure
auth-system/
 ├── db.js
 ├── server.js
 ├── package.json
 ├── README.md
🧠 Learning Outcomes

Understood authentication vs authorization

Implemented secure password storage

Learned JWT-based authentication

Applied RBAC and ABAC models

Built reusable middleware

Designed business authorization rules
Screenshots;<img width="960" height="540" alt="Screenshot 2026-02-09 144452" src="https://github.com/user-attachments/assets/70404711-5dfc-4f5a-8fd1-cc8204bb9966" />
<img width="960" height="540" alt="Screenshot 2026-02-09 144523" src="https://github.com/user-attachments/assets/7edcf7b9-dd6f-4ea3-8b99-e21f34fccece" />
<img width="960" height="540" alt="Screenshot 2026-02-09 144523" src="https://github.com/user-attachments/assets/7edcf7b9-dd6f-4ea3-8b99-e21f34fccece" />
<img width="960" height="540" alt="Screenshot 2026-02-09 144325" src="https://github.com/user-attachments/assets/11df195f-29c9-451d-801b-2cf44f1d3924" />
<img width="960" height="540" alt="Screenshot 2026-02-09 144325" src="https://github.com/user-attachments/assets/11df195f-29c9-451d-801b-2cf44f1d3924" />
<img width="960" height="540" alt="Screenshot 2026-02-09 144619" src="https://github.com/user-attachments/assets/8f3fc623-c559-4fb7-8579-a68afdb1b940" />
<img width="960" height="540" alt="Screenshot 2026-02-09 144619" src="https://github.com/user-attachments/assets/8f3fc623-c559-4fb7-8579-a68afdb1b940" />
Author

Ineza Jesca
Software Development Student
