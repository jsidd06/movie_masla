
import React, { useState } from 'react';
import { Button, Container, Input } from 'reactstrap';
import Axios from '../configs/axios';
import { ToastContainer, toast } from "react-toastify";

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
        toast("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast("🦄 oops there is an error!", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

  }

  return (
    <Container style={{ textAlign: "center" }}>
      <h1>Upload Data</h1>
      <h3> movie title</h3>
      <Input
        placeholder="enter the movie title"
        onChange={(e) => setMovieTitle(e.target.value)}
        required
        type="text"
      />
      <h3> movie description</h3>
      <Input
        placeholder="enter the description"
        onChange={(e) => setMovieDescription(e.target.value)}
        required
        type="text"
      />
      <h3>movie year</h3>
      <Input
        placeholder="enter the year"
        onChange={(e) => setMovieYear(e.target.value)}
        required
        type="Number"
      />
      <h3> movie img</h3>
      <Input
        placeholder="enter the img"
        type="file"
        alt="none"
        onChange={(e) => setMovieImg(e.target.value)}
        required
      />
      <h3> movie rating</h3>
      <Input
        placeholder="enter the rating"
        type="text"
        alt="none"
        onChange={(e) => setMovieRating(e.target.value)}
        required
      />
      <h3> movie Genre</h3>
      <Input
        placeholder="enter the genre"
        type="text"
        alt="none"
        onChange={(e) => setMovieGenre(e.target.value)}
        required
      />
      <br />
      <Button className="btn btn-primary mt-3" onClick={handleSubmit}>
        Upload Data
      </Button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

export default UploadData;
