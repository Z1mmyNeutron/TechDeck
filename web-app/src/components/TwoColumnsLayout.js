import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import ThemeContext from "./ThemeContext";
import Thumbnail from "./Thumbnail";

const SectionHeader = ({ title }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`section-header ${theme === "dark" ? "dark-mode" : ""}`}>
      <span>{title}</span>
    </div>
  );
};

const Line = () => <div className="line"></div>;

const TwoColumnsLayout = ({ pageCategory }) => {
  const { theme } = useContext(ThemeContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const filteredArticles = articles.filter(
    (article) => article.category === pageCategory
  );

  return (
    <div
      className={`two-column-layout-wrapper ${
        theme === "dark" ? "dark-mode" : ""
      }`}
    >
      <Container
        fluid
        className={`two-column-layout ${theme === "dark" ? "dark-mode" : ""}`}
      >
        <Row className="mt-4">
          <Col md={12}>
            <SectionHeader title={pageCategory} />
            <Line />
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            {filteredArticles.slice(0, 10).map((article, index) => (
              <Thumbnail
                key={index}
                title={article.title}
                description={article.description}
                imgSrc={article.urlToImage}
              />
            ))}
          </Col>
          <Col md={5}>
            {filteredArticles.slice(10, 20).map((article, index) => (
              <Thumbnail
                key={index}
                title={article.title}
                description={article.description}
                imgSrc={article.urlToImage}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TwoColumnsLayout;
