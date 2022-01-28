import React from "react";
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
import data from "../Data/Movielist";
function CardScreen() {
  return (
    <Container>
      <Row>
        {data.map((movie) => {
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