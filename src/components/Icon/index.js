import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Icon = ({ className, glitch, of, size, to }) => {
  if (to) {
    return (
      <Link
        className={`icon icon--size-${size || "md"} ${
          glitch ? "icon--glitch" : ""
        } ${className || ""}`}
        to={to}
      >
        <i className={`fa fa-${of}`} />
        {glitch && <i className={`fa fa-${of}`} />}
        {glitch && <i className={`fa fa-${of}`} />}
      </Link>
    );
  } else {
    return (
      <div
        className={`icon icon--size-${size || "md"} ${
          glitch ? "icon--glitch" : ""
        } ${className || ""}`}
      >
        <i className={`fa fa-${of}`} />
        {glitch && <i className={`fa fa-${of}`} />}
        {glitch && <i className={`fa fa-${of}`} />}
      </div>
    );
  }
};

export default Icon;
