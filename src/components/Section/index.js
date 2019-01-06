import React from "react";
import "./style.scss";

const Section = ({ children, className, height, style }) => (
  <section
    className={`section ${className || ""}`}
    style={{ height, ...style }}
  >
    {children}
  </section>
);

export default Section;
