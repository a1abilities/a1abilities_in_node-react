import React, { Component } from 'react'
import {Link} from 'react-router-dom';



export class Services extends Component {
  render() {
    return (
      <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="services">
            <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
              <h3 className="title text-center mb-lg-5 mb-sm-4 mb-4">
                <span>Our</span> Services</h3>
              <div className="row">
                <div className="col-lg-12 about-grid-wthree">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                      <div className="about-fashion-grid ">
                        <div className="about-icon mb-3">
                          {/* <span class="fa fa-trophy" aria-hidden="true"></span> */}
                          <img className="img-icon"  src="/images/do.png" style={{width: '49px'}} />
                        </div>
                        <h6>Software Product Development</h6>
                        <p className="text-dark text-justify pt-2">Product development requires meeting requirements
                          that are
                          constantly changing.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                      <div className="about-fashion-grid ">
                        <div className="about-icon mb-3">
                          {/* <span class="fa fa-clock-o" aria-hidden="true"></span> */}
                          <img className="img-icon" alt="null" src="/images/images.png" style={{width: '45px'}} />
                        </div>
                        <h6>Web Application Development</h6>
                        <p className="text-dark text-justify pt-2">Web application development is the creation of
                          application
                          programs that reside on remote.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                      <div className="about-fashion-grid ">
                        <div className="about-icon mb-3">
                          <img className="img-icon" alt="null" src="/images/application.png" style={{width: '75px'}} />
                        </div>
                        <h6>Application Migration &amp; Re-engineering</h6>
                        <p className="text-dark text-justify pt-2">Application migration is the process of moving an
                          application
                          program from one environment to another.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                      <div className="about-fashion-grid">
                        <div className="about-icon mb-3">
                          <img className="img-icon" alt="null" src="/images/download (1).png" style={{width: '20px'}} />
                        </div>
                        <h6>Application Maintenance &amp; Operation Support</h6>
                        <p className="text-dark text-justify pt-2">Application maintenance is the constant updating,
                          modifying and
                          re-assessing.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                      <div className="about-fashion-grid ">
                        <div className="about-icon mb-3">
                          {/* <span class="fa fa-trophy" aria-hidden="true"></span> */}
                          <img className="img-icon" alt="null" src="/images/download.png" style={{width: '70px'}} />
                        </div>
                        <h6>Enterprise Application Integration</h6>
                        <p className="text-dark text-justify pt-2">Enterprise application integration is the process of
                          linking such
                          applications within a single organization together.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                      <div className="about-fashion-grid ">
                        <div className="about-icon mb-3">
                          {/* <span class="fa fa-clock-o" aria-hidden="true"></span> */}
                          <img className="img-icon" alt="null" src="/images/client-server.png" style={{width: '70px'}} />
                        </div>
                        <h6>Client - Server Application Development</h6>
                        <p className="text-dark text-justify pt-2">The client-server model describes how a server
                          provides resources
                          and services.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                      <div className="about-fashion-grid ">
                        <div className="about-icon mb-3">
                          <img className="img-icon" alt="null" src="/images/download (3).png" style={{width: '40px'}} />
                        </div>
                        <h6>On-Premise and Cloud Application Development </h6>
                        <p className="text-dark text-justify pt-2">A web based app means that it uses web technologies
                          to interact with
                          the user.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                      <div className="about-fashion-grid">
                        <div className="about-icon mb-3">
                          <img className="img-icon" alt="null" src="/images/Plan.png" />
                        </div>
                        <h6>Mobile Apps Development with iOS &amp; Android </h6>
                        <p className="text-dark text-justify pt-2">Mobile application development is the process of
                          creating software
                          applications that run on a mobile.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }
    };

export default Services

