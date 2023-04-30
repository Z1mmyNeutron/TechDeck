import React from "react";
import { useLocation } from "react-router-dom";
import Thumbnail from "../components/Thumbnail";
import "../styles.css";

const Results = () => {
  const location = useLocation();
  const data = location.state?.data || [];

  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <div className="results-grid">
        {data.length > 0 ? (
          data.map((item) => (
            <Thumbnail
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.description}
              imgSrc={item.urlToImage}
            />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Results;
