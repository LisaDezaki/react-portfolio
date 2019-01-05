import React, { Component } from "react";
import "./css/App.scss";
import { Heading, Logo } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo height={60} width={60} />
        <Heading glitch={true}>
          <strong>Ellie</strong>
          <span>Ashton</span>
        </Heading>
      </div>
    );
  }
}

export default App;
