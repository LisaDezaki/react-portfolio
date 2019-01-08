import React from "react";
import "./style.scss";

const Section = ({ children, className, height, id, style }) => (
  <section
    className={`section ${className || ""}`}
    id={id}
    style={{ height, ...style }}
  >
    {children}
  </section>
);

export default Section;
