import React from "react";
import img_l from "./img/logo_glitch_l.png";
import img_m from "./img/logo_glitch_m.png";
import img_r from "./img/logo_glitch_r.png";
import "./style.scss";

const Logo = ({ height, width }) => (
  <div className="logo_container" style={{ height, width }}>
    <img
      className="logo logo-m"
      alt="logo"
      title="EllieAshton Logo"
      src={img_m}
      style={{ height, width }}
    />
    <img
      className="logo logo-l"
      alt="logo"
      title="EllieAshton Logo"
      src={img_l}
      style={{ height, width }}
    />
    <img
      className="logo logo-r"
      alt="logo"
      title="EllieAshton Logo"
      src={img_r}
      style={{ height, width }}
    />
  </div>
);

export default Logo;
