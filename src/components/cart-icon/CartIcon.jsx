import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";
const CartIcon = ({ ...additionalAttr }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="cart-icon-container" {...additionalAttr}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
