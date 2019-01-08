import React, { Component } from "react";
import "./css/App.scss";
import {
  Heading,
  Icon,
  Logo,
  Project,
  Section,
  Subheading
} from "./components";

const projects = [
  {
    id: "lab",
    name: "The Lab.",
    type: "Interaction",
    desc:
      "Spinners, loaders, buttons, modals, tooltips, alerts; all my favourite interface components in one place!",
    link: "/lab",
    img: "project/lab.png"
  },
  {
    id: "bitc",
    name: "Board in the City.",
    type: "Website",
    desc:
      "Single page Wordpress theme with custom features. Board in the City CIC is a not-for-profit board games café in Southampton.",
    link: "/bitc",
    img: "project/bitc.png"
  },
  {
    id: "got",
    name: "Game of Thrones Logos",
    type: "Branding",
    desc: "Game of Thrones house sigils re-imagined as corporate logos.",
    link: "/got",
    img: "project/got.png"
  },
  {
    id: "logos",
    name: "Various Logos",
    type: "Branding",
    desc:
      "A collection of logos designed for various fictional and non-fictional clients.",
    link: "/logos",
    img: "project/logo.png"
  },
  {
    id: "dnd",
    name: "Character Sheet App",
    type: "Under Construction",
    desc:
      "An interactive character sheet app for the Apocalypse World table-top RPG. Currently under construction.",
    link: "/dnd",
    img: "project/dnd.png"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section height="50vh" style={{ paddingTop: "6rem" }}>
          <Logo height={60} width={60} />
          <Heading size="xl" glitch={true}>
            <strong>Ellie</strong>
            <span>Ashton</span>
          </Heading>
          <Subheading>web • ui • ux</Subheading>
        </Section>
        {projects.map((project, index) => (
          <Project
            key={project.id}
            id={project.id}
            name={project.name}
            type={project.type}
            desc={project.desc}
            link={project.link}
            img={project.img}
            align={index % 2 ? "right" : "left"}
          />
        ))}
        <Section height="50vh" style={{ paddingBottom: "6rem" }}>
          <Heading size="l" glitch={true}>
            Get in touch
          </Heading>
          <Subheading>I'm available in these places</Subheading>
          <Icon glitch of="github" to="https://github.com/EllieAshton" />
          <Icon glitch of="behance" to="https://www.behance.net/EllieAshton" />
          <Icon glitch of="paypal" to="https://www.paypal.me/EllieOrElse" />
        </Section>
      </div>
    );
  }
}

export default App;
