import React from "react";
import cx from "classnames";
import { Glitch } from "..";
import css from "./button.module.scss";

const Button = ({ border, children, className, size }) => (
  <button
    className={cx(
      css.button,
      css[`border--${border || "transparent"}`],
      css[`size--${size || "md"}`],
      className
    )}
  >
    <Glitch className={css.buttonText} hover intensity={5}>
      {children}
    </Glitch>
  </button>
);

export default Button;
