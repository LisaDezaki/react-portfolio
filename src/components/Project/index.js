import React from "react";
import { Link } from "react-router-dom";
import { GlitchImg, Label, Section, Title } from "..";
import css from "./project.module.scss";

const Project = ({ desc, id, img, link, name, type }) => (
  <Section id={id} className={css.project}>
    <Link className={css.project__content} to={link}>
      <div className={css.project__img__container}>
        <div className={css.project__goto}>
          <Title className={css.project__goto__text} glitch>
            View project
          </Title>
        </div>
        <GlitchImg
          className={css.project__img}
          animationDelay={Math.random() * 4 + "s"}
          src={img}
          alt={name}
          height={360}
          width={480}
        />
      </div>
      <div className={css.project__info}>
        <Title className={css.project__name}>{name}</Title>
        <Label className={css.project__type}>{type}</Label>
        <p className={css.project__desc}>{desc}</p>
      </div>
    </Link>
  </Section>
);

export default Project;
