import React from "react";
import "./style.scss";
import { Footer, Heading, Label } from "../../components";
import "../project.module.scss";

const ProjectBITC = () => (
  <article>
    <header>
      <Heading glitch>Board in the City.</Heading>
      <Label>Website</Label>
    </header>
    <div>
      <p>
        This project was done on a voluntary basis, for a board game community
        café close to where I lived at the time.
      </p>
    </div>
    <Footer />
  </article>
);

export default ProjectBITC;
