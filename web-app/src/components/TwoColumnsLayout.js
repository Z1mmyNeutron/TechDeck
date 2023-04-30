import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import ThemeContext from "./ThemeContext";
import Thumbnail from "./Thumbnail";

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
      <h1 className={`category-header ${theme === "dark" ? "dark-mode" : ""}`}>
        {pageCategory.charAt(0).toUpperCase() + pageCategory.slice(1)} News
      </h1>
      <div className="section-header dark-mode">
        <span>{pageCategory}</span>
      </div>
      <Line />
      <Container
        fluid
        className={`two-column-layout ${theme === "dark" ? "dark-mode" : ""}`}
      >
        <Row>
          <Col md={7}>
            {filteredArticles.slice(0, 10).map((article, index) => (
              <Thumbnail
                key={index}
                id={article._id}
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
                id={article._id}
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
