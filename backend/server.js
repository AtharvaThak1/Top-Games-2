import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

const { Pool } = pkg;

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT;

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.SQL_PORT,
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    // If no user is found
    if (result.rows.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "User not found." });
    }

    const user = result.rows[0];

    // For now, compare plain text passwords (you should hash the password and compare hashes instead)
    if (user.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password." });
    }

    // If login is successful
    return res
      .status(200)
      .json({ success: true, message: "Login successful!" });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

app.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Insert data into the database
    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, password]
    );

    console.log("User registered:", result.rows[0]);
    res.json({ success: true, message: "User registered successfully!" });
  } catch (err) {
    console.error("Error saving user to database:", err);
    if (err.code === "23505") {
      res.json({ success: false, message: "Email already registered!" });
    } else {
      res.json({ success: false, message: "Registration failed!" });
    }
  }
});

app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});
