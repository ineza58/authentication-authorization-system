const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./db");

async function login(req, res) {
  const { username, password } = req.body;

  const [users] = await db.query(
    "SELECT * FROM users WHERE username = ?",
    [username]
  );

  if (users.length === 0) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const user = users[0];
  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      department: user.department
    },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  res.json({ token });
}

module.exports = login;
