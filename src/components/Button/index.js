import React from "react";
import "./style.scss";

const Button = ({ children, className, glitch }) => (
  <button className={`button ${className || ""}`}>
    <span data-text={children}>{children}</span>
  </button>
);

export default Button;
