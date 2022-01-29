
import React, { useState } from 'react';
import Axios from '../configs/axios';

function UploadData() {
 const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [genreMovie, setMovieGenre] = useState("");
  const [movie, setMovie] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("/upload", {
      title: movieTitle,
      description: movieDescription,
      rating: movieRating,
      img: movieImg,
      year: movieYear,
      genre: genreMovie,
    })
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Upload Data</h1>
      <p> movie title</p>
      <input
        placeholder="enter the movie title"
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <p> movie description</p>
      <input
        placeholder="enter the description"
        onChange={(e) => setMovieDescription(e.target.value)}
      />
      <p>movie year</p>
      <input
        placeholder="enter the year"
        onChange={(e) => setMovieYear(e.target.value)}
      />
      <p> movie img</p>
      <input
        placeholder="enter the img"
        type="file"
        alt="none"
        onChange={(e) => setMovieImg(e.target.value)}
      />
      <p> movie rating</p>
      <input
        placeholder="enter the rating"
        type="text"
        alt="none"
        onChange={(e) => setMovieRating(e.target.value)}
      />
      <p> movie Genre</p>
      <input
        placeholder="enter the genre"
        type="text"
        alt="none"
        onChange={(e) => setMovieGenre(e.target.value)}
      />
      <button onClick={handleSubmit}>Upload Data</button>
    </div>
  );
}

export default UploadData;
