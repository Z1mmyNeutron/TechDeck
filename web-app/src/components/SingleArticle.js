import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleArticle = ({ article }) => {
  const { urlToImage, title, author, content, publishedAt, url } = article;

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By {author} | Published on{" "}
          {new Date(publishedAt).toLocaleDateString()}
        </Card.Subtitle>
        <Card.Text>{content}</Card.Text>
        <Button href={url} target="_blank" rel="noopener noreferrer">
          Read full article
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;
