import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import img_l from "./img/logo_r_l.png";
import img_m from "./img/logo_r_m.png";
import img_r from "./img/logo_r_r.png";
import img_l2 from "./img/logo_g_l.png";
import img_m2 from "./img/logo_g_m.png";
import img_r2 from "./img/logo_g_r.png";
import css from "./logo.module.scss";

const Logo = ({ className, color, glitch, to }) => {
  if (glitch) {
    return (
      <div className={cx(css.container, glitch ? css.glitch : null, className)}>
        {to && <Link className={css.link} to={to} />}
        <img className={cx(css.logo, css.main)} alt="logo" src={img_m} />
        <img className={cx(css.logo, css.left)} alt="logo" src={img_l} />
        <img className={cx(css.logo, css.right)} alt="logo" src={img_r} />
        <img className={cx(css.logo, css.main, css.hover)} alt="logo" src={img_m2} />
        <img className={cx(css.logo, css.left, css.hover)} alt="logo" src={img_l2} />
        <img className={cx(css.logo, css.right, css.hover)} alt="logo" src={img_r2} />
      </div>
    )
  } else {
    return (
      <div className={cx(css.container, glitch ? css.glitch : null, className)}>
        {to && <Link className={css.link} to={to} />}
        <svg
          version="1.1"
          viewBox="0 0 300 300"
          >
            <path className={css.logoSVG} style={{ fill: color ? color : '#393f37' }} d="M174.88,157.18l0.12,0.07v-0.14L174.88,157.18z M262.38,63.42l-74.91-43.25c-7.72-4.45-17.22-4.45-24.94,0
              l-25.04,14.46c-7.71,4.45-12.47,12.69-12.47,21.59v115.54c0,19.2-20.78,31.19-37.4,21.6l-0.1-0.06
              c-7.71-4.45-12.47-12.68-12.47-21.59l0-57.83c0-19.19-20.78-31.19-37.4-21.59l-0.1,0.06c-7.72,4.45-12.47,12.69-12.47,21.6v86.62
              c0,8.91,4.75,17.14,12.47,21.59l99.9,57.68c7.71,4.45,17.21,4.45,24.92,0.01l100.08-57.69c7.73-4.46,12.49-12.7,12.48-21.62
              L274.85,85C274.84,76.09,270.09,67.87,262.38,63.42z M212.48,193.31l-0.08,0.05c-16.62,9.6-37.4-2.4-37.4-21.6v-57.88
              c0-19.2,20.78-31.19,37.41-21.59l0,0c7.7,4.45,12.45,12.66,12.47,21.56l0.08,57.84C224.96,180.6,220.21,188.85,212.48,193.31z
              M174.88,157.18l0.12,0.07v-0.14L174.88,157.18z"/>
          </svg>
      </div>
    )
  }
};

export default Logo;
