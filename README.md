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
## 🗄️ Explanation of Columns

- **id** – Unique identifier for each user  
- **username** – Unique login name  
- **password** – Hashed password  
- **role** – Determines user permissions  
- **department** – Used for attribute-based access  
- **status** – Active or inactive user  

---

## 🔑 Functional Requirements

### ✅ Step 4: User Registration
- Endpoint: `POST /register`  
- Accepts:
  - username  
  - password  
  - role (admin / user / manager)  
  - department  
- Hashes password using bcrypt before storing  
- Ensures username is unique  

---

### ✅ Step 5: Login and JWT Issuing
- Endpoint: `POST /login`  
- Fetches user from database by username  
- Compares entered password with stored hashed password  
- If valid:
  - Generates JWT token  
  - Token contains:
    - user ID  
    - role  
    - department  
  - Token has expiration time  

---

### ✅ Step 6: Authentication Middleware
- Reads JWT from Authorization header  
- Verifies token signature  
- Checks token expiration  
- Decodes token payload  
- Attaches decoded user data to request object  

---

### ✅ Step 7: Role-Based Access Control (RBAC)
- Restricts routes based on user role  
- Examples:
  - Admin-only routes  
  - Admin and Manager routes  
  - Public authenticated routes  

---

### ✅ Step 8: Attribute-Based Access Control (ABAC)
- Uses user attributes from JWT (department)  
- Example rules:
  - Finance users can access finance resources  
  - IT users can access IT tools  

---

### ✅ Step 9: Resource Ownership (ABAC)
- Users can only access their own data  
- Admin can access all users’ data  
- Compares:
  - Token user ID  
  - Requested resource ID  

---

### ✅ Step 10: Custom Authorization Rules
Business-specific rules implemented:
- Allow access only during working hours  
- Block inactive users  
- Combine role + attribute + time rules  
- Provide clear error messages  

---

## 🔐 Security Features
- Password hashing using bcrypt  
- JWT token expiration  
- Role-based route protection  
- Attribute-based route protection  
- Ownership validation  
- Middleware-based security  

---

## ▶ How to Run the Project

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/authentication-authorization-system.git
Author;INEZA Jessica
Software Development
