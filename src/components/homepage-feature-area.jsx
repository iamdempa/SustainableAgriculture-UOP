import React, { Component } from "react";

export default class HomepageFeatureArea extends Component {
  render() {
    return (
      <div>
        <section className="feature_area section_gap_top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="main_title">
                  <h2 className="mb-3">Our Mission</h2>
                  <p>
                    "Promoting Sustainable Agriculture through the exchange of knowledge
                    across the world. Tourism towards a better future..."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single_feature">
                  <div className="icon">
                    <span className="flaticon-student" />
                  </div>
                  <div className="desc">
                    <h4 className="mt-3 mb-2">Agricultural Facilities</h4>
                    <p>
                      blah blah blah blah blah
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single_feature">
                  <div className="icon">
                    <span className="flaticon-book" />
                  </div>
                  <div className="desc">
                  <h4 className="mt-3 mb-2">Agricultural Facilities</h4>
                    <p>
                      blah blah blah blah blah
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single_feature">
                  <div className="icon">
                    <span className="flaticon-earth" />
                  </div>
                  <div className="desc">
                  <h4 className="mt-3 mb-2">Agricultural Facilities</h4>
                    <p>
                      blah blah blah blah blah
                    </p>
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
