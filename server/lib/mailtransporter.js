const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const { mailPass, mailService } = require("./database.js");


const mailAccountUser = 'hr@' + mailService;
const mailAccountPass = mailPass;

const trans = nodemailer.createTransport(smtpTransport({
  service: mailService,
  tls: { rejectUnauthorized: false },
  auth: {
    user: mailAccountUser,
    pass: mailAccountPass
  }
}));


module.exports = { trans: trans };
