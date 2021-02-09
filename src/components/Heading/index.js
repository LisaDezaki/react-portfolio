import React from "react";
import cx from "classnames";
import css from "./heading.module.scss";

const Heading = ({ children, className, size }) => (
  <h1
    className={cx(
      css.heading,
      css[`size--${size || "md"}`],
      className
    )}
  >
    <span className={css.heading__content}>{children}</span>
  </h1>
);

export default Heading;
