import React from "react";

const Button = ({ buttonText, variant }) => {
  const styles = {
    primary: { background: "blue", color: "white", padding: "6px 12px", margin:"20px" },
    secondary: { background: "gray", color: "black", padding: "6px 12px",  margin:"20px"},
  };

  return (
    <button style={styles[variant] || styles.primary}>
      {buttonText}
    </button>
  );
};

export default Button;
