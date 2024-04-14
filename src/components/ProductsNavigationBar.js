import { Col, Container, Row } from "react-bootstrap";
import AllBagsLogo from "../svgs/AllBagsLogo";
import BucketBagLogo from "../svgs/BucketBagLogo";
import DuffleBagLogo from "../svgs/DuffleBagLogo";
import HandBagLogo from "../svgs/HandBagLogo";
import LaptopSleeveLogo from "../svgs/LaptopSleeveLogo";
import MessengerBagLogo from "../svgs/MessengerBagLogo";
import SlingBagLogo from "../svgs/SlingBagLogo";
import ToteBagLogo from "../svgs/ToteBagLogo";
import VanityPouchLogo from "../svgs/VanityPouchLogo";

const bagTypesList = [
  {
    id: "All_Bags",
    svgLogo: <AllBagsLogo className="apply-height-width-to-bag" />,
    name: "All Bags",
  },
  {
    id: "Vanity_Pouch",
    svgLogo: <VanityPouchLogo className="apply-height-width-to-bag" />,
    name: "Vanity Pouch",
  },
  {
    id: "Tote_Bag",
    svgLogo: <ToteBagLogo className="apply-height-width-to-bag" />,
    name: "Tote Bag",
  },
  {
    id: "Duffle_Bag",
    svgLogo: <DuffleBagLogo className="apply-height-width-to-bag" />,
    name: "Duffle Bag",
  },
  {
    id: "Laptop_Sleeve",
    svgLogo: <LaptopSleeveLogo className="apply-height-width-to-bag" />,
    name: "Laptop Sleeve",
  },
  {
    id: "Messenger_Bags",
    svgLogo: <MessengerBagLogo className="apply-height-width-to-bag" />,
    name: "Messenger Bags",
  },
  {
    id: "Slings_Bags",
    svgLogo: <SlingBagLogo className="apply-height-width-to-bag" />,
    name: "Slings Bags",
  },
  {
    id: "Handbags",
    svgLogo: <HandBagLogo className="apply-height-width-to-bag" />,
    name: "Handbags",
  },
  {
    id: "BucketBag",
    svgLogo: <BucketBagLogo className="apply-height-width-to-bag" />,
    name: "Bucket Bag",
  },
];

const ProductsNavigationBar = () => {
  return (
    <Container fluid className="mt-2 mb-0">
      <Row>
        <div className="overflow-x-auto d-flex p-0 align-items-center justify-content-md-center">
          {bagTypesList.map((each) => (
            <Col
              key={each.id}
              className="m-2 d-flex flex-column align-items-center col-3 col-sm-2 col-md-1"
            >
              {each.svgLogo}
              <span className="each-bag-text apply-font-color font-family-encode-sans">
                {each.name}
              </span>
            </Col>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default ProductsNavigationBar;
