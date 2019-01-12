import React from "react";
import { Heading, Label, Logo } from "..";
import css from "./projectheader.module.scss";

const ProjectHeader = ({ label, name }) => (
  <header>
    <Heading glitch>{name}</Heading>
    <Label>{label}</Label>
    <Logo glitch="hover" className={css.returnLink} size={48} to="/" />
  </header>
);

export default ProjectHeader;
