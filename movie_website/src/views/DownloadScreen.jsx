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
        <h1 className="mt-1">{movie.title}</h1>
        <CardImg
          top
          src={movie.img}
          className="mt-2"
          alt="Card image cap"
          style={{ maxHeight: "30rem", minHeight: "30rem",margin:"auto",maxWidth:"20rem",minWidth:"20rem",borderRadius: "5px" }}
        />
        <h5 className="mt-4">Movie Description :- {movie.description}</h5>
        <h6 className="mt-2">Movie Genre :- {movie.genre}</h6>
        <h6 className="mt-2">Movie IMDb Rating :- {movie.rating}</h6>{" "}
        <h6 className="mt-2">Movie Year :-{movie.year}</h6>
        <a
          href={`${movie.link}`}
          type="url"
          style={{
            backgroundColor: "#B33030",
            maxWidth: 200,
            maxHeight: 200,
            margin: "auto",
            fontSize: "20px",
            color: "white",
          }}
          className="btn btn-btn-danger mt-2"
        >
          Click here to download Now
        </a>
      </Card>
    </Container>
  );
}

export default DownloadScreen;
