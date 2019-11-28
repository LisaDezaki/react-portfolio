import React, { Component } from "react";
import "./style.scss";
import { Button, Footer, ProjectHeader } from "../../components";
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
          <p>
            This project was done on a voluntary basis, for a board game
            community café close to where I lived at the time.
          </p>
          <p>
            It was built on WordPress using a custom theme, and with custom
            features added, such as the Game Finder
          </p>
          <Button>Go to website</Button>
          <img src={img_bitc_lg} alt="board-in-the-city" className={css.left} />
        </div>
        <Footer />
      </article>
    );
  }
}

export default ProjectBitC;
