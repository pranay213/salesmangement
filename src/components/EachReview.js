import { Col } from "react-bootstrap";
import QuoteLogo from "../svgs/QuoteLogo";

const EachReview = ({ details }) => {
  const { Reviews, Name, Platform } = details;
  return (
    <Col className="bg-white col-11 col-md-4 col-lg-3 rounded-3 px-3 d-flex flex-column apply-shadow m-2">
      <QuoteLogo className="align-self-end quote-logo-margin" />
      <p>{Reviews?.length > 60 ? Reviews?.slice(0, 60) + "....." : Reviews}</p>
      <div className="d-flex align-items-center">
        <img
          src="https://res.cloudinary.com/dwgpba5n2/image/upload/v1701860201/chat-app/DUMMY_PROFILE_LOGO.png"
          alt="dummy_user_logo"
          className="quote-dummy-image"
        />
        <div className="d-flex flex-column mt-2 ms-2">
          <p className="mb-0">{Name}</p>
          <p className="mt-0">{Platform}</p>
        </div>
      </div>
    </Col>
  );
};

export default EachReview;
