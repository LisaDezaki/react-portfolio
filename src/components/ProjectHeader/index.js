import React from "react";
import { Label, Logo, Title } from "..";
import css from "./projectheader.module.scss";

const ProjectHeader = ({ bg, color, label, name }) => (
  <header className={css.projectHeader} style={{ backgroundColor: bg || null }}>
    <Logo className={css.returnLink} color={color} to="/" />
    <Title className={css.projectHeading} style={{ color: color || null }} size="sm">
      {name}
    </Title>
    <Label className={css.projectLabel} style={{ color: color || null }}>{label}</Label>
  </header>
);

export default ProjectHeader;
