const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb', extend: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true}));

const { env } = require("./lib/database.js");
const mainRoute = require('./routes/mainRoute.js');
const mailerRouter = require('./routes/mailer.js');




if ( env === 'prod') {
    app.use('/', express.static(path.join(__dirname, 'dist')));
    app.use('/dist', express.static(path.join(__dirname, 'dist')));
} else {
    app.use('/', express.static(path.join(__dirname, '..', 'public')));
    app.use('/public', express.static(path.join(__dirname, '..', 'public')));
}


app.use('/api/mail', mailerRouter);
app.use('/',mainRoute);

let port ='';

if(env === 'prod'){
    port = 5000;
}else{
    port = 5000;
}


const server = http.createServer(app);
server.listen(port, () => {
    console.log('server is running on port: ', port);    
});