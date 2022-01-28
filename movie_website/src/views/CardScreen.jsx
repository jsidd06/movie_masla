import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import Axios from "../configs/axios";
function CardScreen() {
  const [movie,setMovie] = useState([]);
  useEffect(() => {
    Axios.get("/movies")
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <Row>
        {movie.map((movie) => {
          return (
            <Col md="4">
              <Card key={movie.id}>
                <CardImg
                  top
                  width="100%"
                  src={movie.img}
                  alt="Card image cap"
                />
                <CardTitle>{movie.title}</CardTitle>
                <CardSubtitle>{movie.year}</CardSubtitle>
                <CardText>{movie.description}</CardText>
                <Button>More</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CardScreen;
