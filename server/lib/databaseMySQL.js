const env = 'local';
//let DbName = 'appointment_ms';
let domainName = 'http://a1abilities.com.au';
let mailPass = 'JaiShriRam123#';
// let mailService = 'rentronics.saimrc.com'

console.log('env db', env);

if (env === 'prod') {
 // DbName = 'appointment_ms';
  domainName = 'http://a1abilities.com.au'
} else {  
  //DbName = 'appointment_ms'
  domainName = 'localhost:5000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };