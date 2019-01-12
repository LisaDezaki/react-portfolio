import React from "react";
import css from "./glitchimg.module.scss";

const GlitchImg = ({ alt, height, src, width }) => (
  <div className={css.glitch}>
    <div className={css.glitch__img}>
      <img src={src} alt={alt} height={height} width={width} />
    </div>
    <div className={css.glitch__img}>
      <img src={src} alt={alt} height={height} width={width} />
    </div>
    <div className={css.glitch__img}>
      <img src={src} alt={alt} height={height} width={width} />
    </div>
    <div className={css.glitch__img}>
      <img src={src} alt={alt} height={height} width={width} />
    </div>
  </div>
);

export default GlitchImg;
