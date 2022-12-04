const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.USER,
     pass: process.env.PASS 
    }
});

let mailDetails = {
    from: 'yashdip123@gmail.com',
    to: 'naravadey@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for nodermailer'  
};

mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});

