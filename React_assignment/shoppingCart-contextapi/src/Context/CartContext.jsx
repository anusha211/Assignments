import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {


  const [cart, setCart] = useState([]);

  const addToCart = (card) => {
    setCart((prevCart) => [...prevCart, card]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{  addToCart, cart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


