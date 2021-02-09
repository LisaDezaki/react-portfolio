import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import css from "./button.module.scss";

const Button = ({ border, children, className, href, size, to }) => (
  <button
    className={cx(
      css.button,
      css[`border--${border || "transparent"}`],
      css[`size--${size || "md"}`],
      className
    )}
  >
    {href && (
      <a className={css.buttonLink} href={href}>{children}</a>
    )}
    {to && (
      <Link className={css.buttonLink} to={to}>{children}</Link>
    )}
    {children}
  </button>
);

export default Button;
