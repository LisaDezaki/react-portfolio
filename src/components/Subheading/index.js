import React from "react";
import css from "./subheading.module.scss";

const Subheading = ({ children, glitch }) => (
  <h4 className={css.subheading}>
    <span className={css.subheading__content}>{children}</span>
    {glitch && <span className={css.subheading__content}>{children}</span>}
    {glitch && <span className={css.subheading__content}>{children}</span>}
  </h4>
);

export default Subheading;
