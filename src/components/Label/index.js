import React from "react";
import cx from "classnames";
import css from "./label.module.scss";

const Label = ({ children, className }) => (
  <span className={cx(css.label, className)}>{children}</span>
);

export default Label;
