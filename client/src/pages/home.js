import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeImage from "../images/home.jpg";

const HomePage = () => {
  const containerStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <>
      <Header />
      <Container fluid style={containerStyle}>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button variant="light" type="button" style={{'padding': '40px 100px 40px 100px', 'fontWeight': 'bold' , 'fontSize': '20px'}}>
              I am single
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="light" type="button" style={{'padding': '40px 100px 40px 100px', 'fontWeight': 'bold' , 'fontSize': '20px'}}>
              Getting Married
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="light" type="button" style={{'padding': '40px 100px 40px 100px', 'fontWeight': 'bold' , 'fontSize': '20px'}}>
              Managing My Growing Family
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="light" type="button" style={{'padding': '40px 100px 40px 100px', 'fontWeight': 'bold' , 'fontSize': '20px'}}>
              Claims
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
