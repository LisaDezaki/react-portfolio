import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GlitchImg, Label, Title } from "..";
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
        <GlitchImg
          className={css.project__img}
          glitch={hover}
          src={img}
          alt={name}
        />

        <div className={css.project__content}>
          <div className={css.project__info}>
            <Title className={css.project__name}>{name}</Title>
            <Label className={css.project__type}>{type}</Label>
            <p className={css.project__desc}>{desc}</p>
            <div
              className={css.project__goto}
              onMouseEnter={this.linkHover}
              onMouseLeave={this.linkUnhover}
            >
              {[1, 2, 3].map(n => (
                <Title glitch className={css.project__goto__text} key={n}>
                  View project
                </Title>
              ))}
              {externalLink ? (
                <a className={css.projectLink} href={link}>
                  Go to project
                </a>
              ) : (
                <Link className={css.projectLink} to={link}>
                  Go to project
                </Link>
              )}
            </div>
          </div>
        </div>

        

        {/* <div className={css.project__img__container}>
          <div className={css.project__goto}>
            {[1, 2, 3].map(n => (
              <Title glitch className={css.project__goto__text} key={n}>
                View project
              </Title>
            ))}
          </div>
          <GlitchImg
            className={css.project__img}
            glitch={hover}
            src={img}
            alt={name}
          />
        </div>
        <div className={css.project__info}>
          <Title className={css.project__name}>{name}</Title>
          <Label className={css.project__type}>{type}</Label>
          <p className={css.project__desc}>{desc}</p>
          <div className={css.project__goto}>
            {[1, 2, 3].map(n => (
              <Title glitch className={css.project__goto__text} key={n}>
                View project
              </Title>
            ))}
          </div>
        </div> */}
        {/* </ProjectLink> */}
      </div>
    );
  }
}

export default Project;
