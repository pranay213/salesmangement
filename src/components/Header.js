import SearchIcon from "../svgs/SearchIcon";
import { Nav, Navbar, Button, Container } from "react-bootstrap";

import UserLogo from "../svgs/UserLogo";
import BookMarkLogo from "../svgs/BookMarkLogo";
import CartLogo from "../svgs/CartLogo";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="apply-black-background-color"
    >
      <Container fluid>
        <Navbar.Brand
          href="#home"
          className="font-family-comme apply-font-color negative-margin hover-link-color"
        >
          TANN TRIM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="font-family-encode-sans apply-black-background-color"
        >
          <Nav className="me-auto add-margin-top">
            <Nav.Link
              href="#features"
              className="apply-font-color hover-link-color"
            >
              Bags
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className="apply-font-color hover-link-color"
            >
              Travel
            </Nav.Link>
            <Nav.Link
              href="#features"
              className="apply-font-color hover-link-color"
            >
              Accesories
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className="apply-font-color hover-link-color"
            >
              Gifting
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className="apply-font-color hover-link-color"
            >
              Jewelery
            </Nav.Link>
          </Nav>
          <Nav className="w-25 d-md-flex flex-md-row justify-content-end negative-margin">
            <Button className="m-1 w-fit bg-transparent border-0">
              <SearchIcon />
            </Button>
            <Button className="m-1 w-fit bg-transparent border-0">
              <UserLogo />
            </Button>
            <Button className="m-1 w-fit bg-transparent border-0">
              <BookMarkLogo color="#E5DFD9" />
            </Button>
            <Button className="m-1 w-fit bg-transparent border-0">
              <CartLogo />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
