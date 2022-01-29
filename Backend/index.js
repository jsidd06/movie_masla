import dotenv from "dotenv";
dotenv.config();
import express from "express";
import data from "./Data/Movielist.js";
import cors from "cors";
import mongoose from "mongoose";
// create express app
const app = express();

// middleware

app.use(cors());
app.use(express.json());

//

// mongoose db
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((req) => {
    console.log("database is ready baby",);
  })
  .catch((err) => console.log(err));


  const newSchema = new mongoose.Schema({
    movies: [{
      title: { type: String, required: true },
      year: { type: Number, required: true },
      genre: { type: String, required: true },
      rating: { type: Number, required: true },
      description: { type: String, required: true },
      img: { type: String, required: true },
      link: { type: String, required: true },
    }]
  });

  const Movie = mongoose.model("Movie", newSchema);

  app.post('/upload', (req, res) => {
    new Movie({
      title: req.body.title,
      year: req.body.year,
      genre: req.body.genre,
      rating: req.body.rating,
      description: req.body.description,
      img: req.body.img,
      link: req.body.link,
    }).save().then(() => {
      res.send("data is saved");
    });
  })
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
