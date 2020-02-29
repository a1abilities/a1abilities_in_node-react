import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
          <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <h3 className="title text-center mb-lg-5 mb-sm-4 mb-4">
              <span>About</span> Company</h3>
            <div className="row">
              <div className="col-lg-7 about-grid-wthree">
                <p className="mb-lg-5 mb-md-4 mb-3">A1 Abilities has been contrived with the main motto of
                  enhancing the quality of living and businesses. We consistently endeavor to develop software
                  which are tailored finely as per the needs of our client community.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 about-grid-grids my-3">
                    <div className="about-fashion-grid ">
                      <div className="about-icon mb-3">
                        <span className="fa fa-trophy" aria-hidden="true" />
                     
                      </div>
                      <h6>Quality is our top Priority</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 about-grid-grids my-3">
                    <div className="about-fashion-grid ">
                      <div className="about-icon mb-3">
                        <span className="fa fa-clock-o" aria-hidden="true" />
                      </div>
                      <h6>On-Time Delivery</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 about-grid-grids my-3">
                    <div className="about-fashion-grid ">
                      <div className="about-icon mb-3">
                        <img className="img-icon" alt="null" src="/images/client.png" />
                      </div>
                      <h6>Customer-Oriented Approach </h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 about-grid-grids my-3">
                    <div className="about-fashion-grid">
                      <div className="about-icon mb-3">
                        <img className="img-icon" alt="null" src="/images/Plan.png" />
                      </div>
                      <h6>Clear and Transparent Process </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 text-center">
                {/* <h3 class="title text-center mb-lg-5 mb-sm-4 mb-4">
              <span>About</span> Company</h3> */}
                <img src="images/Team31.jpg" alt="news image" className="img-fluid pt-2" />
              </div>
            </div>
          </div>
        </section>
      );
    }
  };
export default About
