import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../images/home.jpg"; // Import the background image

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log("Form data submitted:", formData);
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    opacity: 0.5, // Adjust opacity as needed
    zIndex: -1,
  };

  return (
    <>
      <Header />
      <Container fluid style={containerStyle} className="text-center mt-5">
        <h1 style={{ color: "white" }}>Support</h1>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mt-2">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-2">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mt-2">
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formComments" className="mt-2">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-2 w-50">
                Let Us Know
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Support;
