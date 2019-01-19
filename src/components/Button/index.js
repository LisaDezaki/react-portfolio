import React from "react";
import cx from "classnames";
import css from "./button.module.scss";

const Button = ({ border, children, className, size }) => (
  <button
    className={cx(
      css.buttonGlitch,
      css[`border--${border || "transparent"}`],
      css[`size--${size || "md"}`],
      className
    )}
  >
    {[1, 2, 3].map(n => (
      <div key={n} className={css.buttonContentOuter}>
        <div className={css.buttonContentInner}>{children}</div>
      </div>
    ))}
  </button>
);

export default Button;
