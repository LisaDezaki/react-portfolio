import React from "react";
import cx from "classnames";
import css from "./icon.module.scss";

const Icon = ({ className, of, size, to }) => (
  <div
    className={cx(css.iconWrap, css[`icon--size-${size || "md"}`], className)}
  >
    {to && (
      <a className={css.link} href={to}>
        {css.link}
      </a>
    )}
    <i className={cx(css.icon, "fab", `fa-${of}`)} />
  </div>
);

export default Icon;
