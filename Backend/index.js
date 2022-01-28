import express from "express";
import data from "./Data/Movielist.js";
import cors from "cors";

// create express app
const app = express();

// middleware

app.use(cors());

// root route

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});

app.get("/movies", (req, res) => {
  res.status(200).json(data);
});

// spinning server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
