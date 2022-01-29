import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import { nanoid } from "nanoid";
import _ from "lodash";
// create express app
const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(
      null,
      _.kebabCase(req.body.name) +
        "-" +
        nanoid() +
        "." +
        file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage });

// middleware
app.use("/uploads", express.static("uploads"));
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
    console.log("database is ready baby");
  })
  .catch((err) => console.log(err));

const newSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  rating: String,
  description: String,
  img: String,
  link: String,
});

const Movie = mongoose.model("Movie", newSchema);

// app.post('/upload', (req, res) => {
//   new Movie({
//     title: req.body.title,
//     year: req.body.year,
//     genre: req.body.genre,
//     rating: req.body.rating,
//     description: req.body.description,
//     img: req.body.img,
//     link: req.body.link,
//   }).save().then(() => {
//     res.send("data is saved");
//   });
// })

app.post("/upload", upload.single("img"), function (req, res) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  new Movie({
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
    rating: req.body.rating,
    description: req.body.description,
    img: `http://localhost:5000/${req.file.path}`,
    link: req.body.link,
  })
    .save()
    .then(() => {
      res.send("data is saved");
    });
});
// root route

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});

app.get("/movies", (req, res) => {
  Movie.find().then((data) => {
    res.status(200).json(data);
  });
});

app.post("/search", (req, res) => {
  Movie.find()
    .then((data) => {
      res
        .status(200)
        .json(
          data.filter((movie) =>
            movie.title.toLowerCase().includes(req.body.query.toLowerCase())
          )
        );
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// spinning server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
