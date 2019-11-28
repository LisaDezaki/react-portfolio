import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "./css/App.scss";
import Home from "./Home";
import { ProjectBitC, ProjectDnD, ProjectFet, ProjectGoT, ProjectLogos } from "./projects";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/board-in-the-city" component={ProjectBitC} />
          <Route exact path="/character-sheet" component={ProjectDnD} />
          <Route exact path="/fetlife" component={ProjectFet} />
          <Route exact path="/game-of-logos" component={ProjectGoT} />
          <Route exact path="/logos" component={ProjectLogos} />
        </div>
      </Router>
    );
  }
}

export default App;
