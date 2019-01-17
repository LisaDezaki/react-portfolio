import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "./css/App.scss";
import Home from "./Home";
import { ProjectBitC, ProjectDnD, ProjectGoT, ProjectLogos } from "./projects";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/bitc" component={ProjectBitC} />
          <Route exact path="/dnd" component={ProjectDnD} />
          <Route exact path="/got" component={ProjectGoT} />
          <Route exact path="/logos" component={ProjectLogos} />
        </div>
      </Router>
    );
  }
}

export default App;
