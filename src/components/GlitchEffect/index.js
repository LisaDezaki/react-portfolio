import React from "react";
import cx from "classnames";
import css from "./glitcheffect.module.scss";

const GlitchEffect = ({ children, className, intensity, onHover }) => (
  <div
    className={cx(
      css.glitcheffect,
      onHover ? css.glitchEffectOnHover : null,
      css[`intensity--${intensity || 10}`],
      className
    )}
  >
    {children}
    {children}
    {children}
    {children}
    {children}
  </div>
);

export default GlitchEffect;
