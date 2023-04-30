import React from "react";

const Thumbnail = ({ title, description, imgSrc }) => {
  return (
    <div className="thumbnail">
      <img src={imgSrc} alt={title} />
      <div className="thumbnail-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
