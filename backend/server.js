import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDatabase from "./Config/dbConnect.config.js";
import { clerkWebhooks } from "./Controllers/Webhooks.js";

const PORT = process.env.PORT || 5000;

// initialize the express app
const app = express();

// database connection
await connectToDatabase();

// middlewares
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Api Working</h1>");
});

app.post("/clerk", express.json(), clerkWebhooks);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
