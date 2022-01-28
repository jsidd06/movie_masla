import express from "express";

// create express app

const app = express();

// root route

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});

// spinning server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
