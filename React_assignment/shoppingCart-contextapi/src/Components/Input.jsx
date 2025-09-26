import React from "react";


const Input = ({ placeholder, label }) => {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <input placeholder={placeholder} />
    </div>
  );
};


export default Input;
