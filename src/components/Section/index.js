import React from "react";
import "./style.scss";

const Section = ({ children, className, height }) => (
  <section className={`section ${className || ""}`} style={{ height }}>
    {children}
  </section>
);

export default Section;
