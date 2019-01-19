import React, { Component } from "react";
import { GlitchImg, Label, Title } from "..";
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
    return (
      <a
        id={this.props.id}
        className={css.project}
        href={this.props.link}
        onMouseEnter={this.linkHover}
        onMouseLeave={this.linkUnhover}
      >
        <div className={css.project__img__container}>
          <div className={css.project__goto}>
            {[1, 2, 3].map(n => (
              <Title glitch className={css.project__goto__text} key={n}>
                View project
              </Title>
            ))}
          </div>
          <GlitchImg
            className={css.project__img}
            glitch={this.state.hover}
            src={this.props.img}
            alt={this.props.name}
          />
        </div>
        <div className={css.project__info}>
          <Title className={css.project__name}>{this.props.name}</Title>
          <Label className={css.project__type}>{this.props.type}</Label>
          <p className={css.project__desc}>{this.props.desc}</p>
        </div>
      </a>
    );
  }
}

export default Project;
