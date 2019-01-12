import React from "react";
import "./style.scss";
import { Button, Footer, ProjectHeader } from "../../components";
import img_bitc_lg from "../../img/project/bitc/bitc_lg.png";
import css from "../project.module.scss";

const ProjectBITC = () => (
  <article>
    <ProjectHeader name="Board in the City." label="Website" />
    <div className={css.body}>
      <p>
        This project was done on a voluntary basis, for a board game community
        café close to where I lived at the time.
      </p>
      <p>
        It was built on WordPress using a custom theme, and with custom features
        added, such as the Game Finder
      </p>
      <Button border="primary" className={css.center} size="lg" glitch>
        Go to website
      </Button>
      <img src={img_bitc_lg} alt="board-in-the-city" className={css.left} />
    </div>
    <Footer />
  </article>
);

export default ProjectBITC;
