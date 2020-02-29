import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <footer>
            <section className="bottom-footer py-lg-4 py-md-3 py-sm-3 py-3">
              <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
             
                  <div className="footer-center">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="footer-w3layouts-head mb-md-4 mb-3 text-center">
                          <h2>
                            <a href="/">Contact Us</a>
                          </h2>
                        </div>
                        <div className="row">
                          <div className="col-md-6"> 
                            <div className="d-flex">
                              <div className style={{width: '105px'}}>
                                <img src="images/austriaflag.png" alt="news image" className="img-fluid" style={{height: '1rem'}} />
                                <span className="text-white">Address: </span>
                              </div>
                              <div className style={{}}>
                                <p className="text-white"> 
                                  53 Inglewood Dr,Burnside 
                                  <br />heights ,VIC 3023 Australia.</p>
                              </div>
                            </div>
                            <p className="pt-lg-3 pt-2 text-white " style={{paddingLeft: '26px'}}>
                              <span> Phone</span> : +61 0410-317-778</p>
                            <p className="pt-lg-3 pt-2 text-white" style={{paddingLeft: '26px'}}>
                              <span>Email</span> :
                              <a className="text-white" href="mailto:a1abilites@gmail.com">a1abilites@gmail.com</a>
                            </p>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex">
                              <div className style={{width: '105px'}}>
                                <img src="images/indianflag.png" alt="news image" className="img-fluid" style={{height: '1rem'}} />
                                <span className="text-white">Address: </span>
                              </div>
                              <div className style={{}}>
                                <p className="text-white">
                                  11/822,CHB,Jodhpur,
                                  <br />Rajasthan.</p> 
                              </div>
                            </div>
                            <p className="pt-lg-3 pt-2 text-white" style={{paddingLeft: '26px'}}>
                              <span> Phone</span> : +91 9462280992</p>
                            <p className="pt-lg-3 pt-2 text-white" style={{paddingLeft: '26px'}}>
                              <span>Email</span> :
                              <a className="text-white" href="mailto:a1abilites@gmail.com">a1abilites@gmail.com</a>
                            </p>
                          </div>           
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="footer-w3layouts-head mb-md-4 mb-3 text-center pt-2">
                          <h2>
                            <a href="/">About</a>
                          </h2>
                        </div>
                        <p className="text-white">A1 Abilities has been contrived with the main motto of 
                          enhancing the quality of living and businesses. We consistently endeavor to develop software 
                          which are tailored finely as per the needs of our client community.</p>
                      </div>
                    </div>
                 
                  </div>
                </div>
              
           
              <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-center">
                <div className="cr_text pt-4 " style={{color: '#b5b8be'}}>
                  Copyright 2019 ©All rights reserved | A1abilities PTY TLD ABN# 82631548224
                </div>						
              </div>
            </section>
          </footer>
        );
      }
    };
export default About
