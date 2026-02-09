const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./db");

const app = express();
app.use(express.json());

/* REGISTER USER */
app.post("/register", async (req, res) => {
  const { username, password, role, department } = req.body;

  if (!username || !password || !role || !department) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if username already exists
  const checkQuery = "SELECT * FROM users WHERE username = ?";
  db.query(checkQuery, [username], async (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const insertQuery =
      "INSERT INTO users (username, password, role, department) VALUES (?, ?, ?, ?)";

    db.query(
      insertQuery,
      [username, hashedPassword, role, department],
      (err, result) => {
        if (err) return res.status(500).json(err);

        res.status(201).json({
          message: "User registered successfully",
          userId: result.insertId
        });
      }
    );
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
