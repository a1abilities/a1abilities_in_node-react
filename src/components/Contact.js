import React, { Component } from 'react'
import MailAPI from '../api/MailAPI.js';


export class Contact extends Component {    
    render() {
        const submitForm = async (e) =>{
            let bool = true;            
            const formData = {
                firstName: document.getElementById('firstname').value,
                lastName: document.getElementById('lname').value,
                email: document.getElementById('email').value,
                mobile: document.getElementById('mobile').value,
                message: document.getElementById('message').value,
            }
            Object.values(formData).map(data => {
                if(data === ''){
                    bool= false;
                }
            })
            if(bool === true){
                e.preventDefault();
                const result = await MailAPI.submitContact(formData);
            }
        }
        return (
            <section className="footer-bottom" id="contact" style={{backgroundColor: '#c5e4e7'}}>
            <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    
              <h3 className="title text-center mb-lg-5 mb-sm-4 mb-4">
                <span>Get in</span> Touch
              </h3>
              <div className=" contact-form-txt">
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms mb-3">
                      <input className="form-control" placeholder="First Name" name="firstname" id="firstname" required type="text" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms mb-2">
                      <input className="form-control" placeholder="Last Name" name="lname" id="lname" required type="text" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms mb-3">
                      <input className="form-control" placeholder="Email" name="email" id="email" required type="email" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms mb-3">
                      <input className="form-control" placeholder="Mobile" name="mobile" id="mobile" required type="text" />
                    </div>
                  </div>
                  <div className="form-group contact-forms">
                    <textarea className="form-control" placeholder="Message" rows={3} name="message" id="message" required defaultValue={""} />
                  </div>
                  <button type="submit" className="btn sent-butnn" onClick={submitForm}>Send</button>
                </form>
              </div>
            </div>            
          </section>
        );
      }
    };

export default Contact
