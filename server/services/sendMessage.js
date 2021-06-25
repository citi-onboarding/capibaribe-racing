const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = ( async (
  destinationUser,
  subjectText,
  htmlOption,
  textOption,
) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: destinationUser,
    subject: subjectText,
    html: htmlOption,
  });
});
