import React from "react";
import cx from "classnames";
import css from "./glitchimg.module.scss";

const GlitchImg = ({
  alt,
  animationDelay,
  className,
  glitch,
  height,
  hover,
  src,
  width
}) => (
  <div
    className={cx(
      css.glitch,
      glitch ? css.glitchActive : null,
      hover ? css.glitchHover : null,
      className
    )}
  >
    {[1, 2, 3, 4, 5].map(key => (
      <div className={css.glitch__img} key={key} style={{ animationDelay }}>
        <img src={src} alt={alt} height={height} width={width} />
      </div>
    ))}
  </div>
);

export default GlitchImg;
