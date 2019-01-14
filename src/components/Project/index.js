import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GlitchImg, Label, Title } from "..";
import css from "./project.module.scss";

// const Project = ({ desc, id, img, link, name, type }) => (
//   <article id={id} className={css.project}>
//     <Link className={css.project__content} to={link}>
//       <div className={css.project__img__container}>
//         <div className={css.project__goto}>
//           <Title className={css.project__goto__text} glitch>
//             View project
//           </Title>
//           <Title className={css.project__goto__text} glitch>
//             View project
//           </Title>
//           <Title className={css.project__goto__text} glitch>
//             View project
//           </Title>
//         </div>
//         <GlitchImg
//           className={css.project__img}
//           animationDelay={Math.random() * 4 + "s"}
//           src={img}
//           alt={name}
//           height={360}
//           width={480}
//         />
//       </div>
//       <div className={css.project__info}>
//         <Title className={css.project__name}>{name}</Title>
//         <Label className={css.project__type}>{type}</Label>
//         <p className={css.project__desc}>{desc}</p>
//       </div>
//     </Link>
//   </article>
// );

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
      <Link
        id={this.props.id}
        className={css.project}
        to={this.props.link}
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
            height={360}
            width={480}
          />
        </div>
        <div className={css.project__info}>
          <Title className={css.project__name}>{this.props.name}</Title>
          <Label className={css.project__type}>{this.props.type}</Label>
          <p className={css.project__desc}>{this.props.desc}</p>
        </div>
      </Link>
    );
  }
}

export default Project;
