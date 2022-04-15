import React, { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems = [], productToAdd) => {
  // if car items contain product to add
  const presentItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (presentItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity: 1,
    },
  ];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addCartItem: () => {},
  cartCount: 0,
  setCartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);
  const addToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { isCartOpen, setIsCartOpen, addToCart, cartItems, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
