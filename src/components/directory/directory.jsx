import React from "react";

import "../category-item/categories.styles.scss";

import CategoryItem from "../category-item/category-item";

const Directory = ({ categories = [] }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <CategoryItem key={category.id} category={category}></CategoryItem>
        );
      })}
    </div>
  );
};

export default Directory;
