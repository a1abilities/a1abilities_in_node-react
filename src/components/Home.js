import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
   
<div className="main-top">
        <div className="container">
          <div className="mainer-left-grid">
            <div className="banner-right-txt bannersection">
              <h5 style={{fontSize: '2.5rem'}}> <span>A1Abilities</span> can help you because</h5>
              <div className="two-demo-button mt-lg-4 mt-md-3 mt-3">
                <p className="mt-2" style={{fontSize: '1.5rem'}}>
                  <span className="fa fa-arrow-right mr-2" aria-hidden="true" />We Understand our Customers... 
                </p>
                <p className="mt-4" style={{fontSize: '1.5rem'}}>
                  <span className="fa fa-arrow-right mr-2" aria-hidden="true" /> We Believe in Quality...</p>
                <p className="mt-4" style={{fontSize: '1.5rem'}}>
                  <span className="fa fa-arrow-right mr-2" aria-hidden="true" /> We Respect our People...</p>
                {/* <p class="mt-2" style="font-size:1.5rem !important;">
                <span class="fa fa-arrow-right mr-2" aria-hidden="true"></span> Mobile app development</p> */}
              </div>
              {/*<div class="view-buttn mt-lg-5 mt-md-4 mt-sm-4 mt-3">
              <a href="#blog" class="btn">Read More</a>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Home
