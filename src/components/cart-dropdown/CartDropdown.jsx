import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../button/button";

import CartItem from "../cart-item/cart-item";

import { CartContext } from "../../context/cart.context";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  let history = useNavigate();
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item}></CartItem>;
          })
        ) : (
          <EmptyMessage>Cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={() => history("/checkout")}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
