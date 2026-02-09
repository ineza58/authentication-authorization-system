const bcrypt = require("bcryptjs");
const db = require("./db");

async function register(req, res) {
  const { username, password, role, department } = req.body;

  // check unique username
  const [existing] = await db.query(
    "SELECT id FROM users WHERE username = ?",
    [username]
  );

  if (existing.length > 0) {
    return res.status(409).json({ error: "Username already exists" });
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users (username, password, role, department) VALUES (?, ?, ?, ?)",
    [username, hashedPassword, role, department]
  );

  res.json({ message: "User registered successfully" });
}

module.exports = register;
