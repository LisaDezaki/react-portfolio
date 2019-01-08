import React from "react";
import "./style.scss";

const Footer = ({ children, className }) => (
  <footer className={`footer ${className || ""}`}>{children}</footer>
);

export default Footer;
