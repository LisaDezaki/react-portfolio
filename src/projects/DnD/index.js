import React, { Component } from "react";
import "./style.scss";
import { Footer, Logo, ProjectHeader } from "../../components";
import {
  dnd_full,
  dnd_profile,
  dnd_inventory,
  dnd_equipment,
  dnd_skills
} from "../../img/index.js";
import css from "../project.module.scss";

class ProjectDnD extends Component {
  componentDidMount = () => {
    document.title = "D&D Character App // Lisa Dezaki";
  };

  render() {
    return (
      <article>
        <Logo glitch="hover" className={css.returnLink} to="/" />
        <ProjectHeader
          name="Dungeons &amp; Dragons Character Sheet App."
          label="App Design"
        />
        <div className={css.body}>
          <img src={dnd_full} alt="Full" />
          <img src={dnd_profile} alt="Profile" />
          <img src={dnd_inventory} alt="Inventory" />
          <img src={dnd_equipment} alt="Equipment" />
          <img src={dnd_skills} alt="Skills" />
        </div>
        <Footer />
      </article>
    );
  }
}

export default ProjectDnD;
