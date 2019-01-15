import React from "react";
import "./style.scss";
import { Footer, Logo, ProjectHeader } from "../../components";
import {
  got_stark,
  got_lannister,
  got_baratheon,
  got_targaryen,
  got_tyrell,
  got_greyjoy,
  got_martell,
  got_tully,
  got_baelish,
  got_arryn
} from "../../img/index.js";
import css from "../project.module.scss";

const ProjectBITC = () => (
  <article>
    <Logo glitch="hover" className={css.returnLink} size={48} to="/" />
    <ProjectHeader name="Game of Thrones Logos." label="Branding" />
    <div className={css.body}>
      <img src={got_stark} alt="Stark" />
      <img src={got_lannister} alt="Lannister" />
      <img src={got_baratheon} alt="Baratheon" />
      <img src={got_targaryen} alt="Targaryen" />
      <img src={got_tyrell} alt="Tyrell" />
      <img src={got_greyjoy} alt="Greyjoy" />
      <img src={got_martell} alt="Martell" />
      <img src={got_tully} alt="Tully" />
      <img src={got_baelish} alt="Baelish" />
      <img src={got_arryn} alt="Arryn" />
    </div>
    <Footer />
  </article>
);

export default ProjectBITC;
