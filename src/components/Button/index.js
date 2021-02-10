import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GlitchEffect } from "..";
import cx from "classnames";
import css from "./button.module.scss";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  buttonHover = () => {
    this.setState({ hover: true });
  };
  buttonUnhover = () => {
    this.setState({ hover: false });
  };

  render() {
    const { border, children, className, glitchHover, link, size } = this.props;
    const { hover } = this.state;

    return (
      <button
        className={cx(
          css.button,
          css[`border--${border || "transparent"}`],
          css[`size--${size || "md"}`],
          className
        )}
        onMouseEnter={this.buttonHover}
        onMouseLeave={this.buttonUnhover}
      >
        {link && link.charAt(0) !== "/" && (
          <a className={css.buttonLink} href={link}>{children}</a>
        )}
        {link && link.charAt(0) === "/" && (
          <Link className={css.buttonLink} to={link}>{children}</Link>
        )}

        {glitchHover && hover ? (
          <GlitchEffect darkMode={hover}>
            {children}
          </GlitchEffect>
        ) : (
          <span>{children}</span>
        )}
      </button>
    );
  }
}

export default Button;
