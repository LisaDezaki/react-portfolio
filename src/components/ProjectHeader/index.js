import React from "react";
import { Label, Logo, Title } from "..";
import css from "./projectheader.module.scss";

const ProjectHeader = ({ img, label, name }) => (
  <header className={css.projectHeader}>
    <Logo className={css.returnLink} to="/" />
    <Title className={css.projectHeading} size="sm">
      {name}
    </Title>
    <Label className={css.projectLabel}>{label}</Label>
    {/* <img className={css.projectHeader__img} src={img} alt="" /> */}
  </header>
);

export default ProjectHeader;
