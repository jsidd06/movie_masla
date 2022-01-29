import React, { useEffect, useState } from "react";
import { Container, Card, CardImg, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../src/style.css";
import Axios from "../configs/axios";
import Header from "./Header";
import ReactPaginate from "react-paginate";
function CardScreen() {
  const [movie, setMovie] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItem, setCurrentItem] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  useEffect(() => {
    Axios.get("/movies")
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const endOffset = currentPage + itemsPerPage;
    setCurrentItem(movie.slice(currentPage, endOffset));
    setNoOfPages(Math.ceil(movie.length / itemsPerPage));
  }, [currentPage, itemsPerPage, movie]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movie.length;
    setCurrentPage(newOffset);
  };

  return (
    <Container>
      <Header setMovie={setMovie} />
      <Row className="mt-2">
        {currentItem.map((movie) => {
          return (
            <Col md="3">
              <Card key={movie.id} className="mt-5 cardShadow ">
                <CardImg
                  top
                  src={movie.img}
                  alt="Card image cap"
                  className="zoom__hover"
                />
                <CardTitle className="mt-2 p-2">
                  <Link
                    to={`/download/${movie.id}`}
                    className="cardLinkTitle"
                    style={{ fontSize: 25 }}
                  >
                    {movie.title}
                  </Link>
                </CardTitle>
                {/* <CardText>
                  <p className="p-3">
                    <h5>Movie Description</h5>
                    {movie.description}
                  </p>
                  <p className="p-1">
                    <h5>Movie IMDB</h5>
                    {movie.rating}
                  </p>
                  <p className="p-1">
                    <h5>Movie Year</h5>
                    {movie.year}
                  </p>
                </CardText> */}
              </Card>
            </Col>
          );
        })}
      </Row>
      <ReactPaginate
        previousLabel={"Back"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={movie.length / itemsPerPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </Container>
  );
}

export default CardScreen;
