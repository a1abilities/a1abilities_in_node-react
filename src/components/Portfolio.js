import React, { Component } from 'react'

export class Portfolio extends Component {
    render() {
        return (
<section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="portfolio">
        <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
          <h3 className="title text-center mb-lg-5 mb-sm-4 mb-4">
            <span /> Portfolio
          </h3>
          <div className="row gallery-info" style={{width: '100%'}}>
            <div className="col-lg-6 col-md-6 gallery-img-grid my-3">
              <a href="http://nubeselite.com/" target="_blank">
                <div className="gallery-grids">
                  <img src="images/Nubeselite.png" alt="news image" className="img-fluid" />
                  <div className="new-projects-us mt-lg-4 mt-3">
                    <h6>
                      Nubeselite
                    </h6>
                    <p className="mt-lg-3 mt-2">NubesElite is one of the best sales force consulting and training
                      solution in Bangalore, offering various software courses.</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6 gallery-img-grid my-3">
              <a href=" http://www.millennialcare.org.au/" target="_blank">
                <div className="gallery-grids">
                  <img src="images/MillennialCare.png" alt="news image" className="img-fluid" />
                  <div className="new-projects-us mt-lg-4 mt-3">
                    <h6>
                      MillennialCare
                    </h6>
                    <p className="mt-lg-3 mt-2">At Millennial Care, we provide quality, sustainable and flexible
                      services that uphold human rights
                      and create opportunities.</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6 gallery-img-grid my-3">
              <a href="http://sheeranalyticsandinsights.com/" target="_blank">
                <div className="gallery-grids">
                  <img src="images/SAINew.png" alt="news image" className="img-fluid" />
                  <div className="new-projects-us mt-lg-4 mt-3 ">
                    <h6>
                      Sheer Analytics and Insights
                    </h6>
                    <p className="mt-lg-3 mt-2">The global Market Research Industry over a period has
                      evolved from being value proposition driven to become client oriented and output driven.</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6 gallery-img-grid my-3">
              <a href="https://www.hybridskill.com/" target="_blank">
                <div className="gallery-grids">
                  <img src="images/HybridSkill.png" alt="news image" className="img-fluid" />
                  <div className="new-projects-us mt-lg-4 mt-3">
                    <h6>
                      HybridSkill
                    </h6>
                    <p className="mt-lg-3 mt-2"> We are on a mission to deliver cutting-edge consulting
                      and training solutions to the Information Technology.</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6 gallery-img-grid my-3">
              <a href="http://rentronics.a1abilities.co.nz/" target="_blank">
                <div className="gallery-grids">
                  <img src="images/Rentronics_Snapshot.png" alt="news image" className="img-fluid" />
                  <div className="new-projects-us mt-lg-4 mt-3">
                    <h6>
                      Rentronics
                    </h6>
                    <p className="mt-lg-3 mt-2"> Web based solution for our customers based in New Zealand having multiple franchises across country for their rental business.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
export default Portfolio
