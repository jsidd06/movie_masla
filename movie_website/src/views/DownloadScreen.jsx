import React, { useEffect, useState } from "react";
import { Card, CardImg, Container } from "reactstrap";
import Axios from "../configs/axios";
import { Link, useParams } from "react-router-dom";
function DownloadScreen() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    Axios.get(`/movie?id=${id}`)
      .then(({ data }) => {
        setMovie(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <Card style={{ textAlign: "center" }} className="mt-5">
        <h1>{movie.title}</h1>
        <CardImg
          top
          src={movie.img}
          className="zoom__hover mt-2"
          style={{ maxWidth: 200, maxHeight: 200, margin: "auto" }}
          alt="Card image cap"
        />
        <h3 className="mt-2">Movie Description :- {movie.description}</h3>
        <h3>Movie Genre :- {movie.genre}</h3>
        <h3>Movie IMDb Rating :- {movie.rating}</h3> <h3>Movie Year :-{movie.year}</h3>
        <a
          href={`${movie.link}`}
          type="url"
          style={{ backgroundColor: "#B33030",maxWidth: 200, maxHeight: 200, margin: "auto",fontSize: "20px",color: "white" }}
          className="btn btn-btn-danger"
        >
          Click here to download Now
        </a>
      </Card>
    </Container>
  );
}

export default DownloadScreen;
