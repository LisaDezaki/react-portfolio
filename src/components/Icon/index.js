import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import css from "./icon.module.scss";

const Icon = ({ className, glitch, of, size, to }) => {
  if (to) {
    return (
      <Link
        className={cx(
          css.icon,
          glitch ? css[`icon--glitch`] : null,
          css[`icon--size-${size || "md"}`],
          className
        )}
        to={to}
      >
        <i className={cx(css.fa, "fa", `fa-${of}`)} />
        {glitch && <i className={cx(css.fa, "fa", `fa-${of}`)} />}
        {glitch && <i className={cx(css.fa, "fa", `fa-${of}`)} />}
        {glitch && <i className={cx(css.fa, "fa", `fa-${of}`)} />}
        {glitch && <i className={cx(css.fa, "fa", `fa-${of}`)} />}
      </Link>
    );
  } else {
    return (
      <div
        className={cx(
          css.icon,
          glitch ? css[`icon--glitch`] : null,
          css[`icon--size-${size || "md"}`],
          className
        )}
      >
        <i className={cx(css.fa, "fa", `fa-${of}`)} />
        {glitch && <i className={cx(css.fa, "fa", `fa-${of}`)} />}
        {glitch && <i className={cx(css.fa, "fa", `fa-${of}`)} />}
        {glitch && <i className={cx(css.fa, "fa", `fa-${of}`)} />}
        {glitch && <i className={cx(css.fa, "fa", `fa-${of}`)} />}
      </div>
    );
  }
};

export default Icon;
