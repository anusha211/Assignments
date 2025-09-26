import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Button from "./Button";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <Button
              buttonText="Remove"
              variant="secondary"
              onClick={() => removeFromCart(item.id)}
            />
          </div>
        ))
      ) : (
        <p> Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;

const styles = {
  cartContainer: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    margin: "20px",
    width: "250px",
    background: "#f9f9f9",
  },
  cartItem: {
    borderBottom: "2px solid #0c0c0cff",
    padding: "8px 0",
  },
};
