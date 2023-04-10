import React from "react";
import "../styles.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-white mt-4 footer">
      <Container>
        <Col
          md={12}
          className="d-flex justify-content-between align-items-center"
        >
          <ul className="list-inline footer-links">
            <li className="list-inline-item">
              <a className="text-white" href="/about">
                About Us / Contact Us
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="/privacy">
                Privacy Policy
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="/legal">
                Terms of Use
              </a>
            </li>
          </ul>
        </Col>
        <Row className="border-top pt-1">
          <Col>
            <p className="text-center mb-0">
              &copy; {new Date().getFullYear()} TechNews. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
