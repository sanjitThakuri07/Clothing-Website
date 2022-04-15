import React, { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./product-card.styles.scss";

import Button from "../button/button";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
