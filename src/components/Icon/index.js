import React from "react";
import "./style.scss";

const Icon = ({ glitch, of, to }) => (
  <a className={`icon ${glitch ? "icon--glitch" : ""}`} href={to}>
    <i className={`fa fa-${of}`} />
    {glitch && <i className={`fa fa-${of}`} />}
    {glitch && <i className={`fa fa-${of}`} />}
  </a>
);

export default Icon;
