import React from "react";
import { Container, Navbar, Nav, Form, Image } from 'react-bootstrap';

const Header = () => {

  return (
    <div>
        <Container className="mt-3">
          <div className="d-flex justify-content-between align-items-center"> {/* Added align-items-center */}
            <div>
              <Form.Group className="mb-3" controlId="">
                <Form.Control placeholder="Search" />
              </Form.Group>
            </div>
            <div>
              <Image src="../images/logo.jpeg" style={{'width': '100px'}}/>
            </div>
            <div>
              <p>Contact Us</p>
            </div>
          </div>
        </Container>
      <Navbar expand="lg" className="bg-body-tertiary mx-auto justify-content-center"> {/* Added justify-content-center */}
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-center">
              <Nav.Link href="/home">Solutions</Nav.Link>
              <Nav.Link href="/policy">Policies</Nav.Link>
              <Nav.Link href="/pay">Pay Premium</Nav.Link>
              <Nav.Link href="/support">Support</Nav.Link>
              <Nav.Link href="/claim">Claims</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
