import React from "react";
import "./style.scss";

const Subheading = ({ children, glitch }) => (
  <h1 className="subheading">
    <span className="subheading__content">{children}</span>
    {glitch && <span className="subheading__content">{children}</span>}
    {glitch && <span className="subheading__content">{children}</span>}
  </h1>
);

export default Subheading;
