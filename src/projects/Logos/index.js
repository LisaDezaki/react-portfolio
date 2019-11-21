import React, { Component } from "react";
import "./style.scss";
import { Footer, Logo, ProjectHeader } from "../../components";
import {
  logo_brokenarrow,
  logo_enigma,
  logo_euravian,
  logo_fourthwall,
  logo_howla,
  logo_orbit,
  logo_splash,
  logo_venus
} from "../../img/index.js";
import css from "../project.module.scss";

class ProjectLogos extends Component {
  componentDidMount = () => {
    document.title = "Logos // Lisa Dezaki";
  };

  render() {
    return (
      <article>
        <Logo glitch="hover" className={css.returnLink} to="/" />
        <ProjectHeader name="Various Logos." label="Branding" />
        <div className={css.body}>
          <img src={logo_brokenarrow} alt="Broken Arrow" />
          <img src={logo_enigma} alt="Enigma" />
          <img src={logo_euravian} alt="Euravian" />
          <img src={logo_fourthwall} alt="Fourth Wall" />
          <img src={logo_howla} alt="Howla" />
          <img src={logo_orbit} alt="Orbit" />
          <img src={logo_splash} alt="Splash" />
          <img src={logo_venus} alt="Venus" />
        </div>
        <Footer />
      </article>
    );
  }
}

export default ProjectLogos;
