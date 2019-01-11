import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "./css/App.scss";
import Home from "./Home";
import { ProjectBITC, ProjectGOT, ProjectLogos } from "./projects";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/bitc" component={ProjectBITC} />
          <Route exact path="/got" component={ProjectGOT} />
          <Route exact path="/logos" component={ProjectLogos} />
        </div>
      </Router>
    );
  }
}

export default App;
