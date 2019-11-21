import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import img_l from "./img/logo_r_l.png";
import img_m from "./img/logo_r_m.png";
import img_r from "./img/logo_r_r.png";
import img_l2 from "./img/logo_g_l.png";
import img_m2 from "./img/logo_g_m.png";
import img_r2 from "./img/logo_g_r.png";
import logo from "./logo.module.scss";

const Logo = ({ className, to }) => (
  <div className={cx(logo.container, className)}>
    {to && <Link className={logo.link} to={to} />}
    <img className={cx(logo.logo, logo.left)} alt="logo" src={img_l} />
    <img className={cx(logo.logo, logo.main)} alt="logo" src={img_m} />
    <img className={cx(logo.logo, logo.right)} alt="logo" src={img_r} />
    <img className={cx(logo.logo, logo.left, logo.hover)} alt="logo" src={img_l2} />
    <img className={cx(logo.logo, logo.main, logo.hover)} alt="logo" src={img_m2} />
    <img className={cx(logo.logo, logo.right, logo.hover)} alt="logo" src={img_r2} />
  </div>
);

export default Logo;
