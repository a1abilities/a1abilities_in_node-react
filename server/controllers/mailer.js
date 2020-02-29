const Mailer = require('../models/mailer.js');



const submitContact = async function (req, res, next) {
	const params = {
		firstName:  req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		mobile: req.body.mobile,
		message:  req.body.message,
	}
console.log(params);
  try {
		const newActivity = new Mailer(params);
		const result = await newActivity.submitContact();		
		res.send({ result: result });
	} catch (err) {
		next(err);
	}
}




module.exports = { 
	submitContact: submitContact, 	
 };