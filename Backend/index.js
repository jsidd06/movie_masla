import express from "express";
import data from "./Data/Movielist.js";
import cors from "cors";

// create express app
const app = express();

// middleware

app.use(cors());
app.use(express.json());

// root route

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});

app.get("/movies", (req, res) => {
  res.status(200).json(data);
});

app.post("/search", (req, res) => {
  res
    .status(200)
    .json(
      data.filter((movie) =>
        movie.title.toLowerCase().includes(req.body.query.toLowerCase())
      )
    );
});

// spinning server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});