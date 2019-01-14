import React from "react";
import cx from "classnames";
import css from "./section.module.scss";

const Section = ({ children, className, height, id, style }) => (
  <section
    className={cx(css.section, className)}
    id={id}
    style={{ height, ...style }}
  >
    {children}
  </section>
);

export default Section;
