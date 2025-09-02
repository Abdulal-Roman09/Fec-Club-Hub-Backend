import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// load env
dotenv.config();

// mongoes Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Hello World, Database is Connected"))
  .catch((error) => console.error(error));

const app = express();
const PORT = process.env.PORT || 8000;
// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

// simple route
app.get("/", (req, res) => {
  res.send(`Server running on port`);
});

// Start server
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
