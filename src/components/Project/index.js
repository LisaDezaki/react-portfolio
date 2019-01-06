import React from "react";
import { Button, Label, Section, Title } from "..";
import "./style.scss";

const Project = ({ description, img, link, name, type }) => (
  <Section className="project" height="75vh">
    <div
      className="project__img"
      style={{ backgroundImage: `url(./img/${img}` }}
    />
    <div className="project__info">
      <Title glitch className="project__name">
        {name}
      </Title>
      <Label className="project__type">{type}</Label>
      <p className="project__desc">{description}</p>
      <Button className="project__button">Go to project</Button>
    </div>
  </Section>
);

export default Project;
