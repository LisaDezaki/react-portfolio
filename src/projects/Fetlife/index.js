import React, { Component } from "react";
import "./style.scss";
import { Footer, ProjectHeader } from "../../components";
import img_fet_lg from "../../img/project/fet/fet_lg.png";
import css from "../project.module.scss";

class ProjectFet extends Component {
  componentDidMount = () => {
    document.title = "Fetlife App Design // Lisa Dezaki";
  };

  render() {
    return (
      <article>
        <ProjectHeader
          bg="#1b1b1b"
          color="#b51e26"
          name="Fetlife."
          label="App Design"
        />
        <div className={css.body}>
          <img src={img_fet_lg} alt="fetlife-app-design" className={css.left} />
        </div>
        <Footer bg="#1b1b1b" color="#b51e26" />
      </article>
    );
  }
}

export default ProjectFet;
