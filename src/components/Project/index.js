import React, { Component } from "react";
import { Button, GlitchEffect, Label, Title } from "..";
import cx from 'classnames';
import css from "./project.module.scss";

class Project extends Component {
  constructor(props) {
    super(props);
    this.projectContent = React.createRef();
    this.state = {
      hover: false
    };
  }

  linkHover = () => {
    this.setState({ hover: true });
  };

  linkUnhover = () => {
    this.setState({ hover: false });
  };

  render() {
    const { desc, id, img, link, name, type } = this.props;
    const { hover } = this.state;

    const externalLink = link.charAt(0) !== "/";

    return (
      <div
        id={id}
        className={cx(css.project, hover ? css.hover : null)}
      >
        <img className={css.project__img} src={img} alt={name} />

        <div className={css.project__content}>
          <div className={css.project__info}>
            <Title className={css.project__name}>{name}</Title>
            <Label className={css.project__type}>{type}</Label>
            <p className={css.project__desc}>{desc}</p>
            <GlitchEffect onHover>
              <Button href={externalLink && link} to={!externalLink && link}>View Project</Button>
            </GlitchEffect>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
