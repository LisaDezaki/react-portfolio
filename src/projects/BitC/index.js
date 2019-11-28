import React, { Component } from "react";
import "./style.scss";
import { Footer, ProjectHeader } from "../../components";
import img_bitc_lg from "../../img/project/bitc/bitc_lg.png";
import css from "../project.module.scss";

class ProjectBitC extends Component {
  componentDidMount = () => {
    document.title = "Board in the City // Lisa Dezaki";
  };

  render() {
    return (
      <article>
        <ProjectHeader
          bg="#7F0099"
          color="#FFEB3B"
          name="Board in the City."
          label="Web Design"
        />
        <div className={css.body}>
          <img src={img_bitc_lg} alt="board-in-the-city" className={css.left} />
        </div>
        <Footer bg="#7F0099" color="#FFEB3B" />
      </article>
    );
  }
}

export default ProjectBitC;
