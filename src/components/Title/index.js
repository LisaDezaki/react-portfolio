import React from "react";
import cx from "classnames";
import css from "./title.module.scss";

const Title = ({ children, className, style }) => (
  <h4
    className={cx(css.title, className)}
    data-text={children}
    style={style}
  >
    {children}
  </h4>
);

export default Title;
