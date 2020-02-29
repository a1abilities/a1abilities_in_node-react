import React, { Component } from 'react'

export class OurPartners extends Component {
    render() {
        return (
            <section className="pb-4">
            <div className="container  py-md-4 py-sm-4 py-3">
              <h3 className="title text-center mb-lg-5 mb-sm-4 mb-4">
                <span>Our</span> Partners</h3>
              <div className="row">
                <div className="col-md-6 text-center">
                  <a href="http://sargatechnology.com/" target="_blank">
                    <img src="images/STLogo.png" style={{maxHeight: '116px'}} alt="news image" className="img-fluid" />
                  </a>
                </div>
                <div className="col-md-6 text-justify">
                  <a href="https://www.rentronics.co.nz/" target="_blank">
                    <img src="images/rentronics_logo2.png" alt="news image" className="img-fluid" style={{marginTop: '1rem', maxHeight: '64px', marginLeft: '1px'}} />
                  </a>
                </div>
                {/* <div class="col-md-4 text-center">
                  <a href="http://nubeselite.com/"  target="_blank" >
               <img src="images/Nubeselite 01.jpg"  alt="news image" class="img-fluid" style="margin-top: 1.5rem;max-height:77px">
               </a>
                </div> */}
              </div>
            </div>
          </section>
        );
      }
    };
export default OurPartners
