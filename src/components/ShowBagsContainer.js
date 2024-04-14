import { Col, Container, Row } from "react-bootstrap";
import ExportLogo from "../svgs/ExportLogo";
import EachImage from "./EachImage";
import image1 from "../assets/image_1.png";
import image2 from "../assets/image_2.png";
import image3 from "../assets/image_3.png";
import image4 from "../assets/image_4.png";
import image5 from "../assets/image_5.png";
import image6 from "../assets/image_6.png";
import image7 from "../assets/image_7.png";

const imagesContainerList = [
  {
    name: "The Brown Metro Movers",
    image: image1,
  },
  {
    name: "The Metro Movers Black",
    image: image2,
  },
  {
    name: "The Metro Movers Black",
    image: image3,
  },
  {
    name: "The Metro Movers Black",
    image: image4,
  },
  {
    name: "The Brown Metro Movers",
    image: image1,
  },
  {
    name: "The Metro Movers Black",
    image: image5,
  },
  {
    name: "The Metro Movers Black",
    image: image6,
  },
  {
    name: "The Metro Movers Black",
    image: image7,
  },
];

const ShowBagsContainer = () => {
  return (
    <Container fluid className="mb-0">
      <Row className="apply-display-property me-1 ms-1">
        <Col className="d-flex align-items-center font-family-encode-sans apply-font-color col-5 col-md-2">
          <p className="add-font-size">Bags</p>
          <div className="apply-height-width-to-dot"></div>
          <p className="add-font-size">Backpacks</p>
        </Col>
        <Col className="font-family-encode-sans apply-font-color d-none col-1 col-md-8"></Col>
        <Col className="d-flex flex-row align-items-center font-family-encode-sans apply-font-color col-5 col-md-2">
          <p className="me-2 mt-2 add-font-size">13 products</p>
          <ExportLogo className="mb-1 mb-md-0" />
        </Col>
      </Row>
      <Row className="mt-3 flex flex-wrap">
        {imagesContainerList.map((each, index) => (
          <EachImage details={each} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default ShowBagsContainer;
