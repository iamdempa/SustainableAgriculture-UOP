import React, { Component } from "react";
// import $ from 'jquery'; 


export default class HomepageBannerArea extends Component {
  render() {
    return (
      <div>
        <section className="home_banner_area">
          <div className="banner_inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner_content text-center">
                    <p className="text-uppercase">
                      Thriving to a better future with
                    </p>
                    <h2 className="text-uppercase mt-4 mb-5">
                      Sustainable Agriculture Tourism
                    </h2>
                    <div>
                      <a href="index.html" className="primary-btn2 mb-3 mb-sm-0">
                        learn more
                      </a>
                      <a href="index.html" className="primary-btn ml-sm-3 ml-0">
                        see ads
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
