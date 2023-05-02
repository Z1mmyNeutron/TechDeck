import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <Container className="content">
        <Row className="mt-4">
          <Col md={6}>
            <h2>About Our Tech News Company</h2>
            <p>
              Our Tech News Company is a leading source of technology news and
              insights. Our mission is to keep our readers informed about the
              latest developments in the world of technology, from cutting-edge
              innovations to new startups and industry trends. We provide
              comprehensive coverage of the tech sector, offering in-depth
              analysis and expert opinions on topics that matter most to our
              audience. With a dedicated team of experienced journalists and
              contributors, our platform has become a trusted resource for
              technology enthusiasts, professionals, and decision-makers alike.
            </p>
          </Col>
          <Col md={6}>
            <h2>Contact Us</h2>
            <Form>
              <Form.Group controlId="contactForm.Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="contactForm.Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="contactForm.Body">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your message here"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
