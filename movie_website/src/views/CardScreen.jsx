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
              <Card key={movie._id} className="mt-5 cardShadow ">
                <CardImg
                  top
                  src={movie.img}
                  alt="Card image cap"
                  className="zoom__hover"
                />
                <CardTitle className="mt-2 p-2">
                  <Link
                    to={`/download/${movie._id}`}
                    className="cardLinkTitle"
                    style={{ fontSize: 25 }}
                  >
                    {movie.title}
                  </Link>
                </CardTitle>
              </Card>
            </Col>
          );
        })}
      </Row>
      <ReactPaginate
        previousLabel={"Back"}
        nextLabel={"Next"}
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
