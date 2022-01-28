import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import CardScreen from './CardScreen';
function HomeScreen() {
  return (
    <Container className="mt-5">
      <CardScreen  />
    </Container>
  );
}

export default HomeScreen;
