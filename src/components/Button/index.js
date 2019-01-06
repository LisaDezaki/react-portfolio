import React from "react";
import "./style.scss";

const Button = ({ children, className, glitch }) => (
  <button className={`button ${className || ""}`}>{children}</button>
);

export default Button;
