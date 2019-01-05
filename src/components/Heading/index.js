import React from "react";
import "./style.scss";

const Heading = ({ children, glitch }) => (
  <h1 className="heading">
    <span className="heading__content">{children}</span>
    {glitch && <span className="heading__content">{children}</span>}
    {glitch && <span className="heading__content">{children}</span>}
  </h1>
);

export default Heading;
