import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import img_logo from "./img/logo.png";
import img_l from "./img/logo_r_l.png";
import img_m from "./img/logo_r_m.png";
import img_r from "./img/logo_r_r.png";
import img_l2 from "./img/logo_g_l.png";
import img_m2 from "./img/logo_g_m.png";
import img_r2 from "./img/logo_g_r.png";
import css from "./logo.module.scss";

const Logo = ({ className, glitch, to }) => {
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
        <img className={cx(css.logo, css.main)} alt="logo" src={img_logo} />
      </div>
    )
  }
};

export default Logo;
