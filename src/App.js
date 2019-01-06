import React, { Component } from "react";
import "./css/App.scss";
import { Heading, Logo, Project, Section, Subheading } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section height="75vh">
          <Logo height={60} width={60} />
          <Heading glitch={true}>
            <strong>Ellie</strong>
            <span>Ashton</span>
          </Heading>
          <Subheading>web • ui • ux</Subheading>
        </Section>
        <Project
          name="The Lab"
          type="Interaction"
          description="Spinners, loaders, buttons, modals, tooltips, alerts; all my favourite interface components in one place!"
          link="/lab"
          img="project/lab.png"
        />
      </div>
    );
  }
}

export default App;
