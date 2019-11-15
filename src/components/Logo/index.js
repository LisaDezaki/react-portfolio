import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import img_l from "./img/logo_glitch_l.png";
import img_m from "./img/logo_normal.png";
import img_h from "./img/logo_glitch_m.png";
import img_r from "./img/logo_glitch_r.png";
import logo from "./logo.module.scss";

const Logo = ({ className, to }) => (
  <div className={cx(logo.container, className)}>
    {to && <Link className={logo.link} to={to} />}
    <img className={cx(logo.logo, logo.main)} alt="logo" src={img_m} />
    <img className={cx(logo.logo, logo.mainHover)} alt="logo" src={img_h} />
    <img className={cx(logo.logo, logo.left)} alt="logo" src={img_l} />
    <img className={cx(logo.logo, logo.right)} alt="logo" src={img_r} />
  </div>
);

export default Logo;
