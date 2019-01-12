import React from "react";
import cx from "classnames";
import css from "./glitch.module.scss";

const Glitch = ({ children, className, hover, intensity }) => (
  <div
    className={cx(
      css.glitch,
      hover ? css.glitchHover : null,
      css[`intensity--${intensity || 10}`]
    )}
  >
    <div className={cx(css.glitchMain, className)}>{children}</div>
    {intensity > 0 && (
      <div className={cx(css.glitchLeft, className)}>{children}</div>
    )}
    {intensity > 0 && (
      <div className={cx(css.glitchRight, className)}>{children}</div>
    )}
  </div>
);

export default Glitch;
