import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./constants";
import { Button, Col, Container, Row } from "react-bootstrap";
import EachReview from "./EachReview";

const Reviews = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getData();
  }, [page]);
  const getData = async () => {
    try {
      const res = await axios(API_URL + "?page=" + page);
      if (res.status === 200) {
        setData(res?.data?.data);
      }
    } catch (error) {
      const err = new Error(error.message);
      console.log(err);
    }
  };
  return (
    <Container fluid className="mt-0 ms-2 me-2 pb-4">
      <Row>
        <Col className="fw-bold apply-font-color fs-2 mb-1">
          What Our Customers Say
        </Col>
      </Row>
      <Row className="apply-display-property me-1 ms-1">
        {data?.length > 0 ? (
          data?.map((each) => <EachReview key={each?.ID} details={each} />)
        ) : (
          <p className="apply-font-color">Loading.....</p>
        )}
      </Row>
      <Row className="d-flex align-items-center justify-content-evenly p-0">
        <Button
          className="w-25"
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          {"< prev"}
        </Button>
        <Button
          className="w-25"
          onClick={() => {
            if (page < 10) {
              setPage(page + 1);
            }
          }}
        >
          {"next >"}
        </Button>
      </Row>
    </Container>
  );
};

export default Reviews;
