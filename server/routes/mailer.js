const express = require('express')
const Mailer = require('../controllers/mailer.js');

const mailerRouter = express.Router();

mailerRouter.route("/submitContact").post(Mailer.submitContact);

module.exports = mailerRouter;