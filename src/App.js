import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Homepage from './components/homepage';
import AboutProject from './components/about-us';

// import EntireHomepage from './components/entire-homepage';

export default class App extends Component {
  render() {
    return (
      <Router>
        
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutProject} />
      </Router>
    );
  }
}
