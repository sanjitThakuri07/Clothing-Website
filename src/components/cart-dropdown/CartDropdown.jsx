import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../button/button";

import CartItem from "../cart-item/cart-item";

import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  let history = useNavigate();
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem cartItem={item} key={item.id}></CartItem>;
        })}
      </div>
      <Button onClick={() => history("/checkout")}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
