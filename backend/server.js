import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDatabase from "./Config/dbConnect.config.js";
import { clerkWebhooks, stripeWebhooks } from "./Controllers/Webhooks.js";
import educatorRouter from "./Routes/educator.route.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./Config/Cloudinary.config.js";
import courseRouter from "./Routes/course.route.js";
import userRouter from "./Routes/user.route.js";

const PORT = process.env.PORT || 5000;

// initialize the express app
const app = express();

// database connection
await connectToDatabase();

// cloudinary connection
await connectCloudinary();

// middlewares
app.use(cors());
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("<h1>Api Working</h1>");
});

app.post("/clerk", clerkWebhooks);
app.use("/api/v1/educator", express.json(), educatorRouter);
app.use("/api/v1/course", express.json(), courseRouter);
app.use("/api/v1/user", express.json(), userRouter);
app.post(
  "/stripe",
  express.raw({ type: "application/json" }),
  (req, res) => {
    console.log("this is /stripe route");
  },
  stripeWebhooks
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
