import React from "react";
import cx from "classnames";
import css from "./heading.module.scss";

const Heading = ({ children, glitch, size }) => (
  <h1
    className={cx(
      css.heading,
      glitch ? css.glitch : null,
      css[`size--${size || "md"}`]
    )}
  >
    <span className={css.heading__content}>{children}</span>
    {glitch && <span className={css.heading__content}>{children}</span>}
    {glitch && <span className={css.heading__content}>{children}</span>}
  </h1>
);

export default Heading;
