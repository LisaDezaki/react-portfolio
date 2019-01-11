import React from "react";
import "./style.scss";

const Label = ({ children, className }) => (
  <span className={`label ${className || ""}`}>{children}</span>
);

export default Label;
