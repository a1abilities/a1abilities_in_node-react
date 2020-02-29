// const env = process.env.NODE_ENV;
const env = 'prod';

let domainName;
let mailPass = '';
// let mailService = 'rentronics.a1abilities.co.nz'
let mailService = 'smtp.gmail.com'

if (env === 'uat') {
  domainName = 'rentronicsuat.saimrc.com'
} else if (env === 'prod') {
  domainName = 'rentronics.a1abilities.co.nz';
  mailService = 'smtp.gmail.com';
  mailPass = 'y&GFh$16U';
} else if (env === 'dev') {
  domainName = 'rentronicsdev.saimrc.com'
} else {
  domainName = 'localhost:5000'
}

module.exports = { domainName: domainName, mailPass: mailPass, mailService: mailService, env: env };
