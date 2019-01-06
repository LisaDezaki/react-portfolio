import React from "react";
import { Section } from "..";
import "./style.scss";

const Project = ({ description, img, link, name, type }) => (
  <Section className="project" height="75vh">
    <div
      className="project__img"
      style={{ backgroundImage: `url(./img/${img}` }}
    />
  </Section>
);

export default Project;
