import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles.css";
import ThemeContext from "./ThemeContext";

const Article = ({ title, description, imgSrc }) => (
  <Card
    className="article mb-4"
    border="0"
    style={{ boxShadow: "none", backgroundColor: "transparent" }}
  >
    <Card.Img variant="top" src={imgSrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

const FeaturedArticle = ({ title, description, imgSrc }) => (
  <Card className="featured-article mb-4">
    <Card.Img variant="top" src={imgSrc} />
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

const MainContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`main-content-wrapper ${theme === "dark" ? "dark-mode" : ""}`}
    >
      <Container
        fluid
        className={`main-content ${theme === "dark" ? "dark-mode" : ""}`}
      >
        <Row className="mt-4">
          <Col md={12}>
            <SectionHeader title="Today's Picks" />
            <Line />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Article
              title="Left Main Article Title 1"
              description="This is a short description of the featured article."
              imgSrc="https://via.placeholder.com/250x150"
            />
            <Article
              title="Left Main Article Title 2"
              description="This is a short description of the main article."
              imgSrc="https://via.placeholder.com/250x150"
            />
            <Article
              title="Left Main Article Title 3"
              description="This is a short description of the main article."
              imgSrc="https://via.placeholder.com/250x150"
            />
          </Col>
          <Col md={6}>
            <Article
              title="Middle Large Main Article Title 1"
              description="This is a short description of the main article."
              imgSrc="https://via.placeholder.com/500x250"
            />
            <Article
              title="Middle Large Main Article Title 2"
              description="This is a short description of the main article."
              imgSrc="https://via.placeholder.com/500x250"
            />
            <Article
              title="Middle Large Main Article Title 3"
              description="This is a short description of the main article."
              imgSrc="https://via.placeholder.com/500x250"
            />
          </Col>
          <Col md={3}>
            <div className="third-column">
              <SectionHeader title="Most Recent" />
              <Line />
              <Article
                title="Left Most Recent Article Title 1"
                description="This is a short description of the sidebar article."
                imgSrc="https://via.placeholder.com/250x150"
              />
              <Article
                title="Left Most Recent Article Title 2"
                description="This is a short description of the sidebar article."
                imgSrc="https://via.placeholder.com/250x150"
              />
              <Article
                title="Left Most Recent Article Title 3"
                description="This is a short description of the sidebar article."
                imgSrc="https://via.placeholder.com/250x150"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;
