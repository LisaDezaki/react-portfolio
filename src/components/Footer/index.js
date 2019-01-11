import React from "react";
import "./style.scss";

const Footer = ({ children, className }) => (
  <footer className={`footer ${className || ""}`}>
    {children || <p>&copy; EllieAshton {new Date().getFullYear()}</p>}
  </footer>
);

export default Footer;
