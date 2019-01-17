import React from "react";
import cx from "classnames";
import css from "./icon.module.scss";

const Icon = ({ className, glitch, of, size, to }) => (
  <div
    className={cx(
      css.iconWrap,
      glitch ? css[`icon--glitch`] : null,
      css[`icon--size-${size || "md"}`],
      className
    )}
  >
    {to && (
      <a className={css.link} href={to}>
        {css.link}
      </a>
    )}
    <i className={cx(css.icon, "fa", `fa-${of}`)} />
    {glitch && <i className={cx(css.icon, "fa", `fa-${of}`)} />}
    {glitch && <i className={cx(css.icon, "fa", `fa-${of}`)} />}
  </div>
);

export default Icon;
