const nodemailer = require("nodemailer");

// Set up a transporter
let transporter = nodemailer.createTransport({
  service: 'gmail', // Change to your email service
  auth: {
    user: 'your_email@gmail.com', // Your email
    pass: 'your_password', // Your email password
  },
});

// Send email
transporter.sendMail({
  from: 'your_email@gmail.com',
  to: 'recipient_email@gmail.com',
  subject: 'Hello Node!',
  text: 'This is a test email from Node.js!',
}, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
