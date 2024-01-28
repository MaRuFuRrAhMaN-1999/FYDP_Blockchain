import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../images/pay.jpg"; // Import the background image

const Pay = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <div className="text-center mt-5">
          <h1 style={{ color: "black" }}>Pay Premium</h1>
        </div>
        <Container fluid className="center-container" style={{'marginLeft': '100px', 'marginTop': '100px'}}>
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <p className="text-center" style={{ color: "black", 'fontWeight': '600' }}>
                    Pay Premium Now
                  </p>
                  <div className="text-center">
                    <Button variant="primary"><a href="/home" className="text-white">Pay Now</a></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <p className="text-center" style={{ color: "black", 'fontWeight': '600' }}>
                    How to pay premium
                  </p>
                  <div className="text-center">
                    <Button variant="primary">Learn More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pay;
