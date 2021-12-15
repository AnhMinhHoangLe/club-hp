import React from "react";
import "./buttons.styles.css";

const Button = ({ children, ...otherProps }) => {
  return (
    <button id="button" {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
