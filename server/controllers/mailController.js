const dotenv = require('dotenv');
const mailServer = require('../services/sendMessage');

const sendMail = async (req, res) => {
  try {
    const { name, email, phone, topic, message } = req.body;

    const body = `Nome: ${name}
    Email: ${email}
    Telefone: ${phone}
    Assunto: ${topic}
    Mensagem: ${message}`;

    await mailServer({
      destinationUser: process.env.EMAILTO,
      subjectText: topic,
      htmlOption: body,
    });

    res.status(200).send("Email sent")

  } catch (error){
    console.log(error);
    res.status(500).send("Error in sending");
  }
};

module.exports = sendMail;
