import React from "react";
import { Button, Label, Title } from "..";
import cx from 'classnames';
import css from "./project.module.scss";

const Project = ({ desc, id, img, link, name, type }) => (
  <div
    id={id}
    className={cx(css.project)}
  >
    <img className={css.project__img} src={img} alt={name} />

    <div className={css.project__content}>
      <div className={css.project__info}>
        <Title className={css.project__name}>{name}</Title>
        <Label className={css.project__type}>{type}</Label>
        <p className={css.project__desc}>{desc}</p>
        <Button glitchHover link={link}>
          <span>View Project</span>
        </Button>
      </div>
    </div>
  </div>
);

export default Project;
