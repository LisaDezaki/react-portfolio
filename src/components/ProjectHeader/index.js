import React from "react";
import { Heading, Label } from "..";
import css from "./projectheader.module.scss";

const ProjectHeader = ({ img, label, name }) => (
  <header className={css.projectHeader}>
    <Heading glitch size="md">
      {name}
    </Heading>
    <Label>{label}</Label>
    <img className={css.projectHeader__img} src={img} alt="" />
  </header>
);

export default ProjectHeader;
