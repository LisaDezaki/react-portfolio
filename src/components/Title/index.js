import React from "react";
import "./style.scss";

const Title = ({ children, glitch }) => (
  <h4 className={`title ${glitch ? "glitch" : ""}`} data-text={children}>
    {children}
  </h4>
);

export default Title;
