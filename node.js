// The node mailer module makes it easy to send emails from your computer
//the node mailer module can be downloaded and installed using npm
// exp: npm install nodemailer
// you can include the module using the require() method

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user:
	}
})