import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles.css";

const Article = ({ title, description, imgSrc }) => (
  <Card className="mb-4">
    <Card.Img variant="top" src={imgSrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

const FeaturedArticle = ({ title, description, imgSrc }) => (
  <Card className="featured-article mb-4">
    <Card.Img
      variant="top"
      src={imgSrc}
      style={{ width: "100%", height: "400px" }}
    />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <span>{title}</span>
  </div>
);

const Line = () => <div className="line"></div>;

const TwoColumnsLayout = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={12}>
          <SectionHeader title="Variable" />
          <Line />
        </Col>
      </Row>
      <Row>
        <Col md={7}>
          <FeaturedArticle
            title="Left Main Article Title 1"
            description="This is a short description of the main article."
            imgSrc="https://via.placeholder.com/500x200"
          />
          <FeaturedArticle
            title="Left Main Article Title 2"
            description="This is a short description of the main article."
            imgSrc="https://via.placeholder.com/500x200"
          />
        </Col>
        <Col md={5}>
          <Article
            title="Right Main Article Title 1"
            description="This is a short description of the main article."
            imgSrc="https://via.placeholder.com/250x150"
          />
          <Article
            title="Right Main Article Title 2"
            description="This is a short description of the main article."
            imgSrc="https://via.placeholder.com/250x150"
          />
          <Article
            title="Right Main Article Title 2"
            description="This is a short description of the main article."
            imgSrc="https://via.placeholder.com/250x150"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumnsLayout;
