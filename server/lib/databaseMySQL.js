const env = 'local';
let DbName = 'appointment_ms';
let domainName = 'appoint.a1abilities.co.nz';
// let mailPass = 'y&GFhE16U';
// let mailService = 'rentronics.saimrc.com'

console.log('env db', env);

if (env === 'prod') {
  DbName = 'appointment_ms';
  domainName = 'appoint.a1abilities.co.nz'
} else {  
  DbName = 'appointment_ms'
  domainName = 'localhost:5000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };