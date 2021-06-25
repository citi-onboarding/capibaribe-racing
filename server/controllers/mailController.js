const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const sendMail = async (req, res) => {
  try {
    const { name, email, phone, topic, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
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
      subject: topic,
      html: `<p> Nome: ${name} </p>
      <p> Telefone: ${phone} </p>
      <p> Email: ${email} </p>
      <p> Assunto: ${topic} </p>
      <p> Mensagem: ${message} </p>`,
    });

    const body = `Nome: ${name}
    Email: ${email}
    Telefone: ${phone}
    Assunto: ${topic}
    Mensagem: ${message}`;

    res.status(200).send("Email sent")

  } catch (error){
    console.log(error);
    res.status(500).send("Error in sending");
  }
};

module.exports = sendMail;
