import React, { Component } from "react";

import HomepageNavigation from "./homepage-navigtion-bar";
import HomepageBanner from "./homepage-banner-area";
import HomepageFeature from "./homepage-feature-area";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        {/* Homepage navigtion bar */}
        <HomepageNavigationBar />

        {/* Homepage banner area */}
        <HomepageBannerArea />

        {/* Homepage feature area */}
        <HomepageFeatureArea />
      </div>
    );
  }
}
