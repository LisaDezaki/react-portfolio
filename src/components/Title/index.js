import React from "react";
import cx from "classnames";
import css from "./title.module.scss";

const Title = ({ children, className, glitch, style }) => (
  <h4
    className={cx(css.title, glitch ? css.glitch : null, className)}
    data-text={children}
    style={style}
  >
    {children}
  </h4>
);

export default Title;
