import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import img_l from "./img/logo_glitch_l.png";
import img_m from "./img/logo_glitch_m.png";
import img_r from "./img/logo_glitch_r.png";
import logo from "./logo.module.scss";

const Logo = ({ className, size, to }) => (
  <div
    className={cx(logo.container, className)}
    style={{ height: size, width: size }}
  >
    {to && <Link className={logo.link} to={to} />}
    <img
      className={cx(logo.logo, logo.main)}
      alt="logo"
      title="EllieAshton Logo"
      src={img_m}
      style={{ height: size, width: size }}
    />
    <img
      className={cx(logo.logo, logo.left)}
      alt="logo"
      title="EllieAshton Logo"
      src={img_l}
      style={{ height: size, width: size }}
    />
    <img
      className={cx(logo.logo, logo.right)}
      alt="logo"
      title="EllieAshton Logo"
      src={img_r}
      style={{ height: size, width: size }}
    />
  </div>
);

export default Logo;
