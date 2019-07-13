import React, { Component } from "react";
import HomepageBannerArea from './components/homepage-banner-area';
import HomepageNavigationBar from './components/homepage-navigtion-bar';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Homepage navigtion bar */}
        <HomepageNavigationBar />
        {/* Homepage banner area */}
        <HomepageBannerArea />
      </div>
    );
  }
}
