import React, { useState } from "react";
import { Button, Container, Input } from "reactstrap";
import Axios from "../configs/axios";
import { ToastContainer, toast } from "react-toastify";

function UploadData() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [genreMovie, setMovieGenre] = useState("");
  const [linkMovie, setMovieLink] = useState("");
  const [movie, setMovie] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", movieTitle);
    fd.append("description", movieDescription);
    fd.append("rating", movieRating);
    fd.append("img", movieImg);
    fd.append("year", movieYear);
    fd.append("genre", genreMovie);
    fd.append("link", linkMovie);
    Axios.post("/upload", fd)
      .then((res) => {
        console.log(res);
        setMovie(res.data);
        toast("🦄 Well done baby", {
          position: "top-right",
          autoClose: 5000,
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
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <h1>Upload Data</h1>
      <h3> Movie title</h3>
      <Input
        placeholder="enter the movie title"
        onChange={(e) => setMovieTitle(e.target.value)}
        type="text"
      />
      <h3> Movie description</h3>
      <Input
        placeholder="enter the description"
        onChange={(e) => setMovieDescription(e.target.value)}
        type="text"
      />
      <h3>Movie year</h3>
      <Input
        placeholder="enter the year"
        onChange={(e) => setMovieYear(e.target.value)}
        type="Number"
      />
      <h3> Movie img</h3>
      <Input
        placeholder="enter the img"
        type="file"
        alt="none"
        onChange={(e) => setMovieImg(e.target.files[0])}
      />
      <h3> Movie rating</h3>
      <Input
        placeholder="enter the rating"
        type="text"
        alt="none"
        onChange={(e) => setMovieRating(e.target.value)}
      />
      <h3> Movie Genre</h3>
      <Input
        placeholder="enter the genre"
        type="text"
        alt="none"
        onChange={(e) => setMovieGenre(e.target.value)}
      />
      <h3> Movie Link</h3>
      <Input
        placeholder="enter the link"
        type="text"
        alt="none"
        onChange={(e) => setMovieLink(e.target.value)}
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
