import React from "react";
import cx from "classnames";
import css from "./footer.module.scss";

const Footer = ({ children, className }) => (
  <footer className={cx(css.footer, className)}>
    {children || <p>&copy; Lisa Dezaki {new Date().getFullYear()}</p>}
  </footer>
);

export default Footer;
