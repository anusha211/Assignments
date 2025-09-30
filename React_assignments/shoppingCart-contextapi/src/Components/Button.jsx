import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonText, variant, onClick }) => {
  return (
    <button style={styles[variant]} onClick={onClick}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func
};

Button.defaultProps = {
  variant: "primary",
  onClick: () => {}, 
};

const styles = {
  primary: { background: "green", color: "white", padding: "6px 12px", margin: "10px" },
  secondary: { background: "red", color: "white", padding: "6px 12px", margin: "10px" },
};

export default Button;
