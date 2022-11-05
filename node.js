// The node mailer module makes it easy to send emails from your computer
//the node mailer module can be downloaded and installed using npm
// exp: npm install nodemailer
// you can include the module using the require() method

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: "your email@gmail.com",
		pass: "your password"
	}
});

var mailOptions = {
	from: "your email@gmail.com",
	to: "myfriend@gmail.com",
	subject: "sending email using nodejs",
	text: "Hello friend!"
};
transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('email sent: ' + info.response);
	}
});