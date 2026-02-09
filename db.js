// dbconnect.js
const mysql = require("mysql2");

// Create database connection
const db = mysql.createPool({
  host: "localhost",
  user: "root",          // your MySQL username
  password: "",          // your MySQL password
  database: "auth_db",   // your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log(" MySQL Database Connected Successfully");
    connection.release();
  }
});

module.exports = db.promise();

