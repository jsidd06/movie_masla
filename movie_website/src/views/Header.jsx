import React, { useEffect, useState } from "react";
import { Container, Input } from "reactstrap";
import Axios from "../configs/axios";
function Header({ setMovie }) {
  const searchHandler = (e) => {
    Axios.post("/search", {
      query: e.target.value,
    })
      .then(({ data }) => {
        setMovie(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container style={{ textAlign: "center" }} className="mt-2">
      <h1>MovieMasla.com</h1>
      <Input
        className="mt-5"
        placeholder="...Search now"
        onChange={searchHandler}
      />
    </Container>
  );
}

export default Header;
