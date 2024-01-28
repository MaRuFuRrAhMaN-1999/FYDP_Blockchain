import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../images/home.jpg"; // Import the background image

const Claim = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    minHeight: "75vh",
    padding: "20px",
  };

  return (
    <>
      <Header />
      <div style={containerStyle} className="text-center mt-5">
        <h1 style={{ color: "white" }}>Claims</h1>
        <Container fluid className="center-container">
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <div className="text-center">
                    <img
                      src="../images/claim-1.jpg"
                      alt="Description of the image"
                      style={{ width: "200px", height: "auto" }}
                    />
                  </div>
                  <p className="text-center">Claim Process</p>
                  <div className="text-center">
                    <Button>Click Here</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <div className="text-center">
                    <img
                      src="../images/claim-1.jpg"
                      alt="Description of the image"
                      style={{ width: "200px", height: "auto" }}
                    />
                  </div>
                  <p className="text-center">Online Claim Submission</p>
                  <div className="text-center">
                    <Button>Click Here</Button>
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

export default Claim;
