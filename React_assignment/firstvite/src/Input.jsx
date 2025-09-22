import React from "react";
import "./Input.css";

const Input = ({ placeholder, label }) => {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <input placeholder={placeholder} />
    </div>
  );
};


export default Input;
