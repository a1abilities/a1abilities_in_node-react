const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const { domainName, mailPass, mailService } = require("./config");

// const mailAccountUser = 'admin@' + domainName
// const mailAccountPass = mailPass


const mailAccountUser = 'hr@a1abilities.com.au';
const mailAccountPass = 'JaiShriRam123#';

const trans = nodemailer.createTransport(smtpTransport({
  // service: mailService,
  service: 'smtpout.secureserver.net',
  tls: { rejectUnauthorized: false },
  auth: {
    user: mailAccountUser,
    pass: mailAccountPass
  }
}));


module.exports = { trans: trans };
