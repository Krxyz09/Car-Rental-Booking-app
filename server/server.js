import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";

// Initialize Express app
const app = express();

// Connect to MongoDB
await connectDB()

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>
  res.send("Server is running!"),
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`),
);
