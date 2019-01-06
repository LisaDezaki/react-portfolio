import React from "react";
import "./style.scss";

const Section = ({ children, height }) => (
  <section className="section" style={{ height }}>
    {children}
  </section>
);

export default Section;
