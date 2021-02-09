import React from "react";
import cx from "classnames";
import css from "./glitcheffect.module.scss";

const GlitchEffect = ({ children, className, darkMode, fill, intensity, onHover }) => (
  <div
    className={cx(
      css.glitcheffect,
      darkMode ? css.darkMode : null,
      fill ? css.fill : null,
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
