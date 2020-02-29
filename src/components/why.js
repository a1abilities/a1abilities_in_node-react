import React, { Component } from 'react'

export class whyus1 extends Component {
    render() {
        return (
            <section className="clents py-lg-4 py-md-3 py-sm-3 py-3" id="team" style={{color: '#daf1f8', background: 'currentColor'}}>
            <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
              <h3 className="title text-center mb-lg-5 mb-sm-4 mb-4">
                <span>Why</span> Us?</h3>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className=" text-center">
                    <div className=" mb-3">
                      <span className="fa fa-users fa-3x " aria-hidden="true" style={{color: 'black'}} />
                    </div>
                    <h5 className="my-3 text-dark">Efficient Developers</h5>
                    <p className="pt-2 px-2 text-dark text-justify">Our expert developers build highly efficient web
                      solutions using a robust web development framework that meets all Client Business .</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className=" text-center">
                    <div className=" mb-3">
                      <span className="fa fa-comments-o fa-3x " aria-hidden="true" style={{color: 'black'}} />
                    </div>
                    <h5 className="my-3 text-dark">Management &amp; Comm.</h5>
                    <p className=" pt-2 px-2 text-dark text-justify">Whether it is long term collaboration or
                      just a small project,communication and our project management .</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className=" text-center">
                    <div className=" mb-3">
                      <span className="fa fa-laptop fa-3x " aria-hidden="true" style={{color: 'black'}} />
                    </div>
                    <h5 className="my-3 text-dark">Trusted Web Solution</h5>
                    <p className=" pt-2 px-2 text-dark text-justify">Our pragmatic approach and proven
                      methodology in developing customized web pages have offered trusted web solutions
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className=" text-center">
                    <div className=" mb-3">
                      <span className="fa fa-check fa-3x " aria-hidden="true" style={{color: 'black'}} />
                    </div>
                    <h5 className="my-3 text-dark">100% Code Safe </h5>
                    <p className=" pt-2 text-dark text-justify">We guarantee the 100% legal protection of our
                      clients and for every project we sign a non-disclosure agreement before we start
                      initial analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }
    };
export default whyus1
