import React, { Component } from "react";
import "./style.scss";
import { Footer, Logo, ProjectHeader } from "../../components";
import img_fet_lg from "../../img/project/fet/fet_lg.png";
import css from "../project.module.scss";

class ProjectFet extends Component {
  componentDidMount = () => {
    document.title = "Fetlife Redesign // Lisa Dezaki";
  };

  render() {
    return (
      <article>
        <Logo glitch="hover" className={css.returnLink} to="/" />
        <ProjectHeader name="Fetlife Redesign." label="App Design" />
        <div className={css.body}>
          <p>
            The Fetlife website has been running since 2008 but hasn't really updated its aesthetic since its launch, resulting in community frustration, since it is by far the most popular social network for members of the BDSM community
          </p>
          <img src={img_fet_lg} alt="fetlife-redesign" className={css.left} />
        </div>
        <Footer />
      </article>
    );
  }
}

export default ProjectFet;
