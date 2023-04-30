import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleArticle from "../components/SingleArticle";

const SingleArticlePage = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3005/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // new line here
        setArticle(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <h1>Article</h1>
      {article ? <SingleArticle article={article} /> : "Loading..."}
    </div>
  );
};

export default SingleArticlePage;
