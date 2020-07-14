const env = 'local';
let DbName = '';
let domainName = 'http://a1abilities.com.au';
let mailPass = 'JaiShriRam123#';
let mailService = 'a1abilities.com.au';

console.log('env db', env);

if (env === 'prod') {
  DbName = '';
  domainName = 'http://a1abilities.com.au'
} else {  
  DbName = ''
  domainName = 'localhost:5000'
}

module.exports = { 
  mailPass : mailPass,
  mailService : mailService,
  dbName: DbName, 
  domainName: domainName, 
  env: env 
};