import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.CLIENT_ID || "s4u3vx5jrbbaood8pdkbmaaahlnhlo";
const CLIENT_SECRET =
  process.env.CLIENT_SECRET || "fts8pxkwnepap8s0w4cu4h8uujko8f";

let accessToken = null;

// Fetch access token from Twitch API
const fetchAccessToken = async () => {
  try {
    const response = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "client_credentials",
      }),
    });

    if (!response.ok) {
      console.error(`Failed to fetch access token: ${response.status}`);
      const errorData = await response.json();
      console.error("Error details:", errorData);
      return null;
    }

    const data = await response.json();
    accessToken = data.access_token;
    console.log("Access token fetched successfully:", accessToken);
  } catch (error) {
    console.error("Error fetching access token:", error);
  }
};

// Middleware to ensure access token is available
app.use(async (req, res, next) => {
  if (!accessToken) {
    await fetchAccessToken();
  }
  next();
});

app.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    // Simulate saving to the database without hashing
    console.log("Saving user to database:", {
      email,
      password, // Save plain password (not recommended in production)
    });

    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

console.log("Proxy server removed.");
