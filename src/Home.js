import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import "./css/App.scss";
import {
  Heading,
  Footer,
  Icon,
  Logo,
  Project,
  Section,
  Subheading
} from "./components";
import scrollspy from "./css/scrollspy.module.scss";

import {
  img_bitc_png,
  img_bitc_gif,
  img_dnd_png,
  img_dnd_gif,
  img_got_png,
  img_got_gif,
  img_lab_png,
  img_lab_gif,
  img_logo_png,
  img_logo_gif
} from "./img/index.js";

const projects = [
  {
    id: "lab",
    name: "The Lab",
    type: "Interaction",
    desc:
      "Spinners, loaders, buttons, modals, tooltips, alerts; all my favourite interface components in one place!",
    link: "/lab",
    img: img_lab_png,
    imgHover: img_lab_gif
  },
  {
    id: "bitc",
    name: "Board in the City",
    type: "Website",
    desc:
      "Single page Wordpress theme with custom features. Board in the City CIC is a not-for-profit board games café in Southampton.",
    link: "/bitc",
    img: img_bitc_png,
    imgHover: img_bitc_gif
  },
  {
    id: "got",
    name: "Game of Thrones Logos",
    type: "Branding",
    desc: "Game of Thrones house sigils re-imagined as corporate logos.",
    link: "/got",
    img: img_got_png,
    imgHover: img_got_gif
  },
  {
    id: "logos",
    name: "Various Logos",
    type: "Branding",
    desc:
      "A collection of logos designed for various fictional and non-fictional clients.",
    link: "/logos",
    img: img_logo_png,
    imgHover: img_logo_gif
  },
  {
    id: "dnd",
    name: "Character Sheet App",
    type: "Under Construction",
    desc:
      "An interactive character sheet app for the Apocalypse World table-top RPG. Currently under construction.",
    link: "/dnd",
    img: img_dnd_png,
    imgHover: img_dnd_gif
  }
];

class Home extends Component {
  render() {
    return (
      <div className="Home">
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
            name={`${project.name}.`}
            type={project.type}
            desc={project.desc}
            link={project.link}
            img={project.img}
            imgHover={project.imgHover || project.img}
          />
        ))}
        <Section height="50vh" style={{ paddingBottom: "6rem" }}>
          <Heading size="l" glitch={true}>
            Get in touch
          </Heading>
          <Subheading>I'm available in these places</Subheading>
          <div style={{ display: "flex" }}>
            <Icon glitch of="github" to="https://github.com/EllieAshton" />
            <Icon
              glitch
              of="behance"
              to="https://www.behance.net/EllieAshton"
            />
            <Icon glitch of="paypal" to="https://www.paypal.me/EllieOrElse" />
          </div>
        </Section>
        <Scrollspy
          items={projects.map(p => p.id)}
          componentTag="div"
          currentClassName={scrollspy.active}
          offset={-250}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          {projects.map(project => (
            <a
              key={project.id}
              className={scrollspy.link}
              href={`#${project.id}`}
              title={project.name}
            >
              <hr />
            </a>
          ))}
        </Scrollspy>
        <Footer />
      </div>
    );
  }
}

export default Home;
