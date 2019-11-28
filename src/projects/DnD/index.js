import React, { Component } from "react";
import "./style.scss";
import { Footer, ProjectHeader } from "../../components";
import {
  dnd_full
} from "../../img/index.js";
import css from "../project.module.scss";

class ProjectDnD extends Component {
  componentDidMount = () => {
    document.title = "Character Sheet App Design // Lisa Dezaki";
  };

  render() {
    return (
      <article>
        <ProjectHeader
          bg="#202225"
          color="#ffd800"
          name="Character Sheet."
          label="App Design"
        />
        <div className={css.body}>
          <img src={dnd_full} alt="Full" />
        </div>
        <Footer />
      </article>
    );
  }
}

export default ProjectDnD;
