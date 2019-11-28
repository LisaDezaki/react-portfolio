import React from "react";
import cx from "classnames";
import css from "./footer.module.scss";

const Footer = ({ bg, children, className, color }) => (
  <footer className={cx(css.footer, className)} style={{ backgroundColor: bg || null }}>
    {children || <p style={{ color: color || null }}>&copy; Lisa Dezaki {new Date().getFullYear()}</p>}
  </footer>
);

export default Footer;
