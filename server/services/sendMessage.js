const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = ( async (
  destinationUser,
  subjectText,
  htmlOption,
) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls : { rejectUnauthorized: false }
  });

  /*console.log("1 2 3");*/
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAILTO,
    subject: subjectText,
    html: htmlOption,
  });
});
