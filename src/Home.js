import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import "./css/App.scss";
import { Heading, Footer, Icon, Logo, Project, Subheading } from "./components";
import scrollspy from "./css/scrollspy.module.scss";

import {
  img_bitc_png,
  img_dnd_png,
  img_fet_png,
  img_got_png,
  img_lab_png,
  // img_logo_png,
} from "./img/index.js";

const projects = [
  {
    id: "lab",
    name: "CSS Lab",
    type: "Interface Design",
    desc:
      "Spinners, loaders, buttons, modals, tooltips, alerts; all my favourite interface components in one place!",
    link: "http://lab.lisadezaki.me",
    img: img_lab_png
  },
  {
    id: "got",
    name: "Game of Thrones Logos",
    type: "Identity Design",
    desc: "Game of Thrones house sigils re-imagined as corporate logos.",
    link: "/got",
    img: img_got_png
  },
  // {
  //   id: "logos",
  //   name: "Various Logos",
  //   type: "Identity Design",
  //   desc:
  //     "A collection of logos designed for various fictional and non-fictional clients.",
  //   link: "/logos",
  //   img: img_logo_png
  // },
  {
    id: "dnd",
    name: "Character Sheet App",
    type: "App Design",
    desc:
      "An interactive character sheet design for Dungeons & Dragons or similar RPGs. Currently under construction.",
    link: "/dnd",
    img: img_dnd_png
  },
  {
    id: "fet",
    name: "Fetlife App Redesign",
    type: "App Design",
    desc: "A modern redesign of the FetLife app for iOS and Android.",
    link: "/fetlife",
    img: img_fet_png
  },
  {
    id: "bitc",
    name: "Board in the City",
    type: "Web Design",
    desc:
      "Single page Wordpress theme with custom features. Board in the City CIC is a not-for-profit board games café in Southampton.",
    link: "/bitc",
    img: img_bitc_png
  }
];

class Home extends Component {
  componentDidMount = () => {
    document.title = "LisaDezaki";
  };

  render() {
    return (
      <div className="Home">
        <Logo glitch />
        <section>
          <Heading size="lg" glitch>
            <strong>Lisa</strong>
            <span>Dezaki</span>
          </Heading>
          <Subheading>web • ui • ux</Subheading>
        </section>
        <section>
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
        </section>
        <section>
          <Heading size="md" glitch={true}>
            Get in touch
          </Heading>
          <Subheading>I'm available in these places</Subheading>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
              width: "100%"
            }}
          >
            <Icon
              glitch
              size="lg"
              of="github"
              to="https://github.com/LisaDezaki"
            />

            <Icon
              glitch
              size="lg"
              of="behance"
              to="https://www.behance.net/LisaTheArtful"
            />

            <Icon
              glitch
              size="lg"
              of="twitter"
              to="https://www.twitter.net/LisaDezaki"
            />

            <Icon
              glitch
              size="lg"
              of="linkedin"
              to="https://www.linkedin.com/in/lisa-dezaki-8b9088196/"
            />

            <Icon
              glitch
              size="lg"
              of="telegram-plane"
              to="https://t.me/LisaTheHandful"
            />


          </div>
        </section>
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
