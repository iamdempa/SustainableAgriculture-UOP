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
                  <h2 className="mb-3">Awesome Feature</h2>
                  <p>
                    Replenish man have thing gathering lights yielding shall you
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
                    <h4 className="mt-3 mb-2">Scholarship Facility</h4>
                    <p>
                      One make creepeth, man bearing theira firmament won't
                      great heaven
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
                    <h4 className="mt-3 mb-2">Sell Online Course</h4>
                    <p>
                      One make creepeth, man bearing theira firmament won't
                      great heaven
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
                    <h4 className="mt-3 mb-2">Global Certification</h4>
                    <p>
                      One make creepeth, man bearing theira firmament won't
                      great heaven
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
