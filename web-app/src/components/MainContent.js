import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import ThemeContext from "./ThemeContext";
import axios from "axios";
import Thumbnail from "./Thumbnail";

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <span>{title}</span>
  </div>
);

const Line = () => <div className="line"></div>;

const MainContent = () => {
  const { theme } = useContext(ThemeContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/api/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

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
            {articles.slice(0, 10).map((article) => (
              <Thumbnail
                key={article._id}
                id={article._id} // add this line
                title={article.title}
                description={article.description}
                imgSrc={article.urlToImage}
              />
            ))}
          </Col>
          <Col md={6}>
            {articles.slice(10, 20).map((article) => (
              <Thumbnail
                key={article._id}
                id={article._id} // add this line
                title={article.title}
                description={article.description}
                imgSrc={article.urlToImage}
              />
            ))}
          </Col>
          <Col md={3}>
            <div className="third-column">
              <SectionHeader title="Most Recent" />
              <Line />
              {articles.slice(20, 30).map((article) => (
                <Thumbnail
                  key={article._id}
                  id={article._id} // add this line
                  title={article.title}
                  description={article.description}
                  imgSrc={article.urlToImage}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;
