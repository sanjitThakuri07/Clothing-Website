import React from "react";

import "./categories.styles.scss";

const categoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        {title && <h2>{title}</h2>}

        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default categoryItem;
