import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../Context/CartContext";
import Button from "../Button";
import styles from './Card.module.css';

const Card = ({ id, title, description }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <Button
        buttonText="Add to Cart"
        variant="primary"
        onClick={() => addToCart({ id, title, description })}
      />
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
