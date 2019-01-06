import React from "react";
import "./style.scss";

const Icon = ({ glitch, of, to }) => (
  <a class={`icon ${glitch ? "icon--glitch" : ""}`} href={to}>
    <i class={`fa fa-${of}`} />
    {glitch && <i class={`fa fa-${of}`} />}
    {glitch && <i class={`fa fa-${of}`} />}
  </a>
);

export default Icon;
