import React from "react";
import cx from "classnames";
import css from "./label.module.scss";

const Label = ({ children, className, style }) => (
  <span className={cx(css.label, className)} style={style}>{children}</span>
);

export default Label;
