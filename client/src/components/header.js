import React from "react";
import { Container, Navbar, Nav, Button, Form, Image } from 'react-bootstrap';

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
            <Button variant="light" type="button" style={{'fontWeight': 'bold' , 'fontSize': '20px'}}>
            Contact Us
            </Button>
              
            </div>
          </div>
        </Container>
      <div className="d-flex justify-content-between mx-5" style={{ 'fontWeight': 'bold', 'fontSize': '20px'}}>
        <a href="/" style={{'textDecoration': 'none', 'color': 'black'}}>Sulotions</a>
        <a href="/policy" style={{'textDecoration': 'none', 'color': 'black'}}>My Policy</a>
        <a href="/pay" style={{'textDecoration': 'none', 'color': 'black'}}>Pay Premium</a>
        <a href="/support" style={{'textDecoration': 'none', 'color': 'black'}}>Support</a>
        <a href="/claim" style={{'textDecoration': 'none', 'color': 'black'}}>Claim</a>
        <a href="/about" style={{'textDecoration': 'none', 'color': 'black'}}>About</a>
      </div>
    </div>
  );
};

export default Header;
