import React, { Component } from "react";

export default class EntireHomepage extends Component {
  render() {
    return (
      <div>
        <header className="header_area">
          <div className="main_menu">
            <div className="search_input" id="search_input_box">
              <div className="container">
                <form
                  className="d-flex justify-content-between"
                  
                >
                  <input
                    type="text"
                    className="form-control"
                    id="search_input"
                    placeholder="Search Here"
                  />
                  <button type="submit" className="btn" />
                  <span
                    className="ti-close"
                    id="close_search"
                    title="Close Search"
                  />
                </form>
              </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand logo_h" href="index.html">
                  <img src="img/logo.png" alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" /> <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>

                <div
                  className="collapse navbar-collapse offset"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav menu_nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about-us.html">
                        About
                      </a>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <a
                        href="index.html"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="courses.html">
                            Courses
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="course-details.html">
                            Course Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="elements.html">
                            Elements
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <a
                        href="index.html"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="single-blog.html">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index.html" className="nav-link search" id="search">
                        <i className="ti-search" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section className="home_banner_area">
          <div className="banner_inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner_content text-center">
                    <p className="text-uppercase">
                      Best online education service In the world
                    </p>
                    <h2 className="text-uppercase mt-4 mb-5">
                      One Step Ahead This Season
                    </h2>
                    <div>
                      <a href="index.html" className="primary-btn2 mb-3 mb-sm-0">
                        learn more
                      </a>
                      <a href="index.html" className="primary-btn ml-sm-3 ml-0">
                        see course
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <div className="popular_courses">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="main_title">
                  <h2 className="mb-3">Our Popular Courses</h2>
                  <p>
                    Replenish man have thing gathering lights yielding shall you
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="owl-carousel active_course">
                  <div className="single_course">
                    <div className="course_head">
                      <img className="img-fluid" src="img/courses/c1.jpg" alt="" />
                    </div>
                    <div className="course_content">
                      <span className="price">$25</span>
                      <span className="tag mb-4 d-inline-block">design</span>
                      <h4 className="mb-3">
                        <a href="course-details.html">Custom Product Design</a>
                      </h4>
                      <p>
                        One make creepeth man bearing their one firmament won't
                        fowl meat over sea
                      </p>
                      <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                        <div className="authr_meta">
                          <img src="img/courses/author1.png" alt="" />
                          <span className="d-inline-block ml-2">Cameron</span>
                        </div>
                        <div className="mt-lg-0 mt-3">
                          <span className="meta_info mr-4">
                            <a href="index.html">
                              {" "}
                              <i className="ti-user mr-2" />25{" "}
                            </a>
                          </span>
                          <span className="meta_info">
                            <a href="index.html">
                              {" "}
                              <i className="ti-heart mr-2" />35{" "}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single_course">
                    <div className="course_head">
                      <img className="img-fluid" src="img/courses/c2.jpg" alt="" />
                    </div>
                    <div className="course_content">
                      <span className="price">$25</span>
                      <span className="tag mb-4 d-inline-block">design</span>
                      <h4 className="mb-3">
                        <a href="course-details.html">Social Media Network</a>
                      </h4>
                      <p>
                        One make creepeth man bearing their one firmament won't
                        fowl meat over sea
                      </p>
                      <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                        <div className="authr_meta">
                          <img src="img/courses/author2.png" alt="" />
                          <span className="d-inline-block ml-2">Cameron</span>
                        </div>
                        <div className="mt-lg-0 mt-3">
                          <span className="meta_info mr-4">
                            <a href="index.html">
                              {" "}
                              <i className="ti-user mr-2" />25{" "}
                            </a>
                          </span>
                          <span className="meta_info">
                            <a href="index.html">
                              {" "}
                              <i className="ti-heart mr-2" />35{" "}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single_course">
                    <div className="course_head">
                      <img className="img-fluid" src="img/courses/c3.jpg" alt="" />
                    </div>
                    <div className="course_content">
                      <span className="price">$25</span>
                      <span className="tag mb-4 d-inline-block">design</span>
                      <h4 className="mb-3">
                        <a href="course-details.html">Computer Engineering</a>
                      </h4>
                      <p>
                        One make creepeth man bearing their one firmament won't
                        fowl meat over sea
                      </p>
                      <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                        <div className="authr_meta">
                          <img src="img/courses/author3.png" alt="" />
                          <span className="d-inline-block ml-2">Cameron</span>
                        </div>
                        <div className="mt-lg-0 mt-3">
                          <span className="meta_info mr-4">
                            <a href="index.html">
                              {" "}
                              <i className="ti-user mr-2" />25{" "}
                            </a>
                          </span>
                          <span className="meta_info">
                            <a href="index.html">
                              {" "}
                              <i className="ti-heart mr-2" />35{" "}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section_gap registration_area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="row clock_sec clockdiv" id="clockdiv">
                  <div className="col-lg-12">
                    <h1 className="mb-3">Register Now</h1>
                    <p>
                      There is a moment in the life of any aspiring astronomer
                      that it is time to buy that first telescope. It’s exciting
                      to think about setting up your own viewing station.
                    </p>
                  </div>
                  <div className="col clockinner1 clockinner">
                    <h1 className="days">150</h1>
                    <span className="smalltext">Days</span>
                  </div>
                  <div className="col clockinner clockinner1">
                    <h1 className="hours">23</h1>
                    <span className="smalltext">Hours</span>
                  </div>
                  <div className="col clockinner clockinner1">
                    <h1 className="minutes">47</h1>
                    <span className="smalltext">Mins</span>
                  </div>
                  <div className="col clockinner clockinner1">
                    <h1 className="seconds">59</h1>
                    <span className="smalltext">Secs</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="register_form">
                  <h3>Courses for Free</h3>
                  <p>It is high time for learning</p>
                  <form
                    className="form_area"
                    id="myForm"
                  
                  >
                    <div className="row">
                      <div className="col-lg-12 form_group">
                        <input
                          name="name"
                          placeholder="Your Name"
                          required=""
                          type="text"
                        />
                        <input
                          name="name"
                          placeholder="Your Phone Number"
                          required=""
                          type="tel"
                        />
                        <input
                          name="email"
                          placeholder="Your Email Address"
                          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                          required=""
                          type="email"
                        />
                      </div>
                      <div className="col-lg-12 text-center">
                        <button className="primary-btn">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="trainer_area section_gap_top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="main_title">
                  <h2 className="mb-3">Our Expert Trainers</h2>
                  <p>
                    Replenish man have thing gathering lights yielding shall you
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                <div className="thumb d-flex justify-content-sm-center">
                  <img className="img-fluid" src="img/trainer/t1.jpg" alt="" />
                </div>
                <div className="meta-text text-sm-center">
                  <h4>Mated Nithan</h4>
                  <p className="designation">Sr. web designer</p>
                  <div className="mb-4">
                    <p>
                      If you are looking at blank cassettes on the web, you may
                      be very confused at the.
                    </p>
                  </div>
                  <div className="align-items-center justify-content-center d-flex">
                    <a href="index.html">
                      <i className="ti-facebook" />
                    </a>
                    <a href="index.html">
                      <i className="ti-twitter" />
                    </a>
                    <a href="index.html">
                      <i className="ti-linkedin" />
                    </a>
                    <a href="index.html">
                      <i className="ti-pinterest" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                <div className="thumb d-flex justify-content-sm-center">
                  <img className="img-fluid" src="img/trainer/t2.jpg" alt="" />
                </div>
                <div className="meta-text text-sm-center">
                  <h4>David Cameron</h4>
                  <p className="designation">Sr. web designer</p>
                  <div className="mb-4">
                    <p>
                      If you are looking at blank cassettes on the web, you may
                      be very confused at the.
                    </p>
                  </div>
                  <div className="align-items-center justify-content-center d-flex">
                    <a href="index.html">
                      <i className="ti-facebook" />
                    </a>
                    <a href="index.html">
                      <i className="ti-twitter" />
                    </a>
                    <a href="index.html">
                      <i className="ti-linkedin" />
                    </a>
                    <a href="index.html">
                      <i className="ti-pinterest" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                <div className="thumb d-flex justify-content-sm-center">
                  <img className="img-fluid" src="img/trainer/t3.jpg" alt="" />
                </div>
                <div className="meta-text text-sm-center">
                  <h4>Jain Redmel</h4>
                  <p className="designation">Sr. Faculty Data Science</p>
                  <div className="mb-4">
                    <p>
                      If you are looking at blank cassettes on the web, you may
                      be very confused at the.
                    </p>
                  </div>
                  <div className="align-items-center justify-content-center d-flex">
                    <a href="index.html">
                      <i className="ti-facebook" />
                    </a>
                    <a href="index.html">
                      <i className="ti-twitter" />
                    </a>
                    <a href="index.html">
                      <i className="ti-linkedin" />
                    </a>
                    <a href="index.html">
                      <i className="ti-pinterest" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                <div className="thumb d-flex justify-content-sm-center">
                  <img className="img-fluid" src="img/trainer/t4.jpg" alt="" />
                </div>
                <div className="meta-text text-sm-center">
                  <h4>Nathan Macken</h4>
                  <p className="designation">Sr. web designer</p>
                  <div className="mb-4">
                    <p>
                      If you are looking at blank cassettes on the web, you may
                      be very confused at the.
                    </p>
                  </div>
                  <div className="align-items-center justify-content-center d-flex">
                    <a href="index.html">
                      <i className="ti-facebook" />
                    </a>
                    <a href="index.html">
                      <i className="ti-twitter" />
                    </a>
                    <a href="index.html">
                      <i className="ti-linkedin" />
                    </a>
                    <a href="index.html">
                      <i className="ti-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="events_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="main_title">
                  <h2 className="mb-3 text-white">Upcoming Events</h2>
                  <p>
                    Replenish man have thing gathering lights yielding shall you
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single_event position-relative">
                  <div className="event_thumb">
                    <img src="img/event/e1.jpg" alt="" />
                  </div>
                  <div className="event_details">
                    <div className="d-flex mb-4">
                      <div className="date">
                        <span>15</span> Jun
                      </div>

                      <div className="time-location">
                        <p>
                          <span className="ti-time mr-2" /> 12:00 AM - 12:30 AM
                        </p>
                        <p>
                          <span className="ti-location-pin mr-2" /> Hilton Quebec
                        </p>
                      </div>
                    </div>
                    <p>
                      One make creepeth man for so bearing their firmament won't
                      fowl meat over seas great
                    </p>
                    <a href="index.html" className="primary-btn rounded-0 mt-3">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single_event position-relative">
                  <div className="event_thumb">
                    <img src="img/event/e2.jpg" alt="" />
                  </div>
                  <div className="event_details">
                    <div className="d-flex mb-4">
                      <div className="date">
                        <span>15</span> Jun
                      </div>

                      <div className="time-location">
                        <p>
                          <span className="ti-time mr-2" /> 12:00 AM - 12:30 AM
                        </p>
                        <p>
                          <span className="ti-location-pin mr-2" /> Hilton Quebec
                        </p>
                      </div>
                    </div>
                    <p>
                      One make creepeth man for so bearing their firmament won't
                      fowl meat over seas great
                    </p>
                    <a href="index.html" className="primary-btn rounded-0 mt-3">
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="text-center pt-lg-5 pt-3">
                  <a href="index.html" className="event-link">
                    View All Event <img src="img/next.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial_area section_gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="main_title">
                  <h2 className="mb-3">Client say about me</h2>
                  <p>
                    Replenish man have thing gathering lights yielding shall you
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="testi_slider owl-carousel">
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <img src="img/testimonials/t1.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Elite Martin</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <img src="img/testimonials/t2.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Davil Saden</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <img src="img/testimonials/t1.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Elite Martin</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <img src="img/testimonials/t2.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Davil Saden</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <img src="img/testimonials/t1.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Elite Martin</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <img src="img/testimonials/t2.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Davil Saden</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-area section_gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Top Products</h4>
                <ul>
                  <li>
                    <a href="index.html">Managed Website</a>
                  </li>
                  <li>
                    <a href="index.html">Manage Reputation</a>
                  </li>
                  <li>
                    <a href="index.html">Power Tools</a>
                  </li>
                  <li>
                    <a href="index.html">Marketing Service</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="index.html">Jobs</a>
                  </li>
                  <li>
                    <a href="index.html">Brand Assets</a>
                  </li>
                  <li>
                    <a href="index.html">Investor Relations</a>
                  </li>
                  <li>
                    <a href="index.html">Terms of Service</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Features</h4>
                <ul>
                  <li>
                    <a href="index.html">Jobs</a>
                  </li>
                  <li>
                    <a href="index.html">Brand Assets</a>
                  </li>
                  <li>
                    <a href="index.html">Investor Relations</a>
                  </li>
                  <li>
                    <a href="index.html">Terms of Service</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="index.html">Guides</a>
                  </li>
                  <li>
                    <a href="index.html">Research</a>
                  </li>
                  <li>
                    <a href="index.html">Experts</a>
                  </li>
                  <li>
                    <a href="index.html">Agencies</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 single-footer-widget">
                <h4>Newsletter</h4>
                <p>You can trust us. we only send promo offers,</p>
                <div className="form-wrap" id="mc_embed_signup">
                  <form
                    target="_blank"
                    
                    className="form-inline"
                  >
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Your Email Address"
                      
                      required=""
                      type="email"
                    />
                    <button className="click-btn btn btn-default">
                      <span>subscribe</span>
                    </button>
                    
                    <div style={{position: 'absolute', left: -5000}}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabIndex="-1"
                        value=""
                        type="text"
                      />
                    </div>

                    <div className="info" />
                  </form>
                </div>
              </div>
            </div>
            <div className="row footer-bottom d-flex justify-content-between">
              <p className="col-lg-8 col-sm-12 footer-text m-0 text-white" />
              <div className="col-lg-4 col-sm-12 footer-social">
                <a href="index.html">
                  <i className="ti-facebook" />
                </a>
                <a href="index.html">
                  <i className="ti-twitter" />
                </a>
                <a href="index.html">
                  <i className="ti-dribbble" />
                </a>
                <a href="index.html">
                  <i className="ti-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </footer>

        <script src="js/jquery-3.2.1.min.js" />
        <script src="js/popper.js" />
        <script src="js/bootstrap.min.js" />
        <script src="vendors/nice-select/js/jquery.nice-select.min.js" />
        <script src="vendors/owl-carousel/owl.carousel.min.js" />
        <script src="js/owl-carousel-thumb.min.js" />
        <script src="js/jquery.ajaxchimp.min.js" />
        <script src="js/mail-script.js" />

        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE" />
        <script src="js/gmaps.min.js" />
        <script src="js/theme.js" />
      </div>
    );
  }
}
