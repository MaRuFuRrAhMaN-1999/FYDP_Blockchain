import React from "react";
import Header from "../components/header";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../images/home.jpg";

const Policy = () => {
  return (
    <>
      <Header />
      <div style={{'marginTop': '100px', 'marginLeft': '100px'}}>
        <Container fluid className="center-container">
            <Row className="justify-content-center">
            <Col xs={12} sm={6} md={4}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
               <div className="text-center">
            <img
          src="../images/5.jpeg"
          alt="Description of the image"
          style={{ width: "160px", height: "auto" }}
        />
            </div>
                    <Card.Text className="text-center fs-4">
                    Jiban Bima Corporation
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
            <div className="text-center">
            <img
          src="../images/4.jpeg"
          alt="Description of the image"
          style={{ width: "160px", height: "auto" }}
        />
            </div>
                    <Card.Text className="text-center fs-4">
                    MetLife 
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
           <div className="text-center">
            <img
          src="../images/3.jpeg"
          alt="Description of the image"
          style={{ width: "160px", height: "auto" }}
        />
            </div>
                    <Card.Text className="text-center fs-4">
                    Delta Life Insurance
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
           <div className="text-center">
            <img
          src="../images/6.jpeg"
          alt="Description of the image"
          style={{ width: "160px", height: "auto" }}
        />
            </div>
                    <Card.Text className="text-center fs-4">
                    BGIC
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
           <div className="text-center">
            <img
          src="../images/1.jpeg"
          alt="Description of the image"
          style={{ width: "160px", height: "auto" }}
        />
            </div>
                    <Card.Text className="text-center fs-4">
                    Green Delta
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
           <div className="text-center">
            <img
          src="../images/2.jpeg"
          alt="Description of the image"
          style={{ width: "160px", height: "auto" }}
        />
            </div>
                    <Card.Text className="text-center fs-4">
                    API
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "100%",
          height: "900px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          opacity: 0.5, // Adjust opacity as needed
          zIndex: -1, // Ensure the background is behind other content
        }}
      />
    </>
  );
};

export default Policy;
