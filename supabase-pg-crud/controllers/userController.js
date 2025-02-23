// controllers/userController.js
const pool = require("../config/pgClient");

// CREATE a new user
exports.createUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
      [name, email, age]
    );
    res.status(201).json({ message: "User created", data: result.rows[0] });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ all users
exports.getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE user by ID
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
      [name, email, age, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated", data: result.rows[0] });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE user by ID
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted", data: result.rows[0] });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
