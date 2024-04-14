import { Col } from "react-bootstrap";
import AddToCartLogo from "../svgs/AddToCartLogo";
import BookMarkLogo from "../svgs/BookMarkLogo";

const EachImage = ({ details }) => {
  return (
    <Col className="d-flex flex-column align-items-center mt-2 col-12 col-sm-6 col-md-4 col-lg-3">
      <div>
        <img src={details?.image} alt={details?.name} className="h-75" />
        <BookMarkLogo
          className="position-absolute negative-margin-left apply-color-to-bookmark"
          color="#0C0C0C"
        />
        <div>
          <p className="apply-font-color mb-0">{details?.name}</p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <p className="apply-font-color mt-0 fw-bold fw-bold">4899</p>
              <p className="apply-font-color very-small-text">8999</p>
              <p className="apply-font-color very-small-text text-success">
                (50% off)
              </p>
            </div>
            <AddToCartLogo className="mb-2" />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default EachImage;
