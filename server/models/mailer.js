const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
var fs = require('fs');


const { trans } = require("../lib/mailtransporter");
const { domainName } = require("../lib/config");

const Mailer = function (params) {
  this.firstName = params.firstName;
  this.lastName = params.lastName;
  this.email = params.email;
  this.mobile = params.mobile;
  this.message = params.message;  
};

const readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
    if (err) {
      throw err;
    }
    else {
      callback(null, html);
    }
  });
};

Mailer.prototype.submitContact = function () {
  const that = this;

  readHTMLFile(__dirname + '/template/birthdayTemplate.html', function (err, html) {

    const template = handlebars.compile(html);
    const replacements = {
      username: that.firstName
    };
    const htmlToSend = template(replacements);

    const mail = {
      // from: 'admin@' + domainName,
      from: 'hr@a1abilities.com.au',
    // to: 'sktanwar.2014@gmail.com',
     // cc: 'kamlesh.gehlott@gmail.com',
      // to: that.emailId,
      subject: `Happy Birthday ${that.firstName}`,
      attachments: [{
        filename: 'birthday.jpg',
        path: __dirname + '/template/img/birthday.jpg',
        cid: 'unique@cid'
      }],
      html: htmlToSend
    }

    trans.sendMail(mail, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });
}

module.exports = Mailer;
