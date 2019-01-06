import React from "react";
import "./style.scss";

const Button = ({ children, className, glitch }) => (
  <button className={`button ${className || ""}`} data-text={children}>
    {children}
  </button>
);

export default Button;
