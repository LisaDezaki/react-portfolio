import React from "react";
import "./style.scss";

const Title = ({ children, className, glitch }) => (
  <h4
    className={`title ${glitch ? "glitch" : ""} ${className || ""}`}
    data-text={children}
  >
    {children}
  </h4>
);

export default Title;
