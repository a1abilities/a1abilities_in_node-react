const nodemailer = require('nodemailer');



const { trans } = require("../lib/mailtransporter.js");

const Mailer = function (params) {
  this.firstName = params.firstName;
  this.lastName = params.lastName;
  this.email = params.email;
  this.mobile = params.mobile;
  this.message = params.message;  
};


Mailer.prototype.submitContact = function () {
  const that = this;

  const mail = {
      from: 'hr@a1abilities.com.au',
      to: 'hr@a1abilities.com.au',
      cc: 'kamlesh.gehlott@gmail.com',
      subject: `Contact by ${that.firstName}, ${that.email}`,     
      html: ` <p>Name : ${that.firstName} ${that.lastName}</p><br/>
              <p>Email : ${that.email}</p><br/>
              <p>Mobile : ${that.mobile}</p><br/>
              <p>Message : ${that.message}</p><br/>`
  }

    trans.sendMail(mail, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
}

module.exports = Mailer;
