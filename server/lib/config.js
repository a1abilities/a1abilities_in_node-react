// const env = process.env.NODE_ENV;
const env = 'prod';

let domainName;
let mailPass = '';
let mailService = 'http://a1abilities.com.au/'
//let mailService = 'pop.secureserver.net'

if (env === 'uat') {
  domainName = 'http://a1abilities.com.au/'
} else if (env === 'prod') {
  domainName = 'http://a1abilities.com.au/';
  mailService = 'smtpout.secureserver.net';
  mailPass = 'JaiShriRam123#';
} else if (env === 'dev') {
  domainName = 'http://a1abilities.com.au/'
} else {
  domainName = 'localhost:5000'
}

module.exports = { domainName: domainName, mailPass: mailPass, mailService: mailService, env: env };
