import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import ThemeContext from "./ThemeContext";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <span>{title}</span>
  </div>
);

const Line = () => <div className="line"></div>;

const MainContent = () => {
  const { theme } = useContext(ThemeContext);
  const [articles, setArticles] = useState([]);
  const [mostRecent, setMostRecent] = useState([]);
  const [todayPicks, setTodayPicks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/api/articles")
      .then((response) => {
        const fetchedArticles = response.data;

        // Sort articles by 'publishedAt' in descending order (most recent first)
        const sortedArticles = [...fetchedArticles].sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
        setMostRecent(sortedArticles.slice(0, 10));

        // random articles for today's picks
        const shuffledArticles = [...fetchedArticles].sort(
          () => 0.5 - Math.random()
        );
        setTodayPicks(shuffledArticles.slice(0, 20));

        setArticles(fetchedArticles);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div
      className={`main-content-wrapper ${theme === "dark" ? "dark-mode" : ""}`}
    >
      <Header />
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
            {todayPicks.slice(0, todayPicks.length / 2).map((article) => (
              <Thumbnail
                key={article._id}
                id={article._id}
                title={article.title}
                description={article.description}
                imgSrc={article.urlToImage}
              />
            ))}
          </Col>
          <Col md={6}>
            {todayPicks
              .slice(todayPicks.length / 2, todayPicks.length)
              .map((article) => (
                <Thumbnail
                  key={article._id}
                  id={article._id}
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
              {mostRecent.map((article) => (
                <Thumbnail
                  key={article._id}
                  id={article._id}
                  title={article.title}
                  description={article.description}
                  imgSrc={article.urlToImage}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default MainContent;
