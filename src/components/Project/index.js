import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Label, Section, Title } from "..";
import "./style.scss";

class Project extends Component {
  render() {
    return (
      <Section id={this.props.id} className="project">
        <Link className="project__content" to={this.props.link}>
          <div className="project__img__container">
            <div className="project__goto">
              <Title className="project__goto__text" glitch>
                View project
              </Title>
            </div>
            <img
              className="project__img"
              src={this.props.img}
              alt={this.props.name}
              height={360}
              width={480}
            />
            <img
              className="project__img--hover"
              src={this.props.imgHover || this.props.img}
              alt={this.props.name}
              height={360}
              width={480}
            />
          </div>
          <div className="project__info">
            <Title className="project__name">{this.props.name}</Title>
            <Label className="project__type">{this.props.type}</Label>
            <p className="project__desc">{this.props.desc}</p>
          </div>
        </Link>
      </Section>
    );
  }
}

// const Project = ({ align, desc, img, link, name, type }) => (
//   <Section className={`project align-${align}`} height="75vh">
//     <div
//       className="project__img"
//       style={{ backgroundImage: `url(./img/${img}` }}
//     />
//     <div className="project__panel">
//       <div className="project__info">
//         <Title className="project__name">{name}</Title>
//         <Label className="project__type">{type}</Label>
//         <p className="project__desc">{desc}</p>
//         <Button className="project__button">Go to project</Button>
//       </div>
//     </div>
//   </Section>
// );

export default Project;
