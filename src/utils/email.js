require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (email, qrCode) => {
  console.log("====================================");
  console.log(process.env.EMAIL_USERNAME, process.env.EMAIL_PASSWORD);
  console.log("====================================");
  //1) create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",

    porte: 465,
    secure: true,
    auth: {
      user: `${process.env.EMAIL_USERNAME}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
    },

    //Activate in gmail 'less secure app' option
  });
  //2) Define the email options
  const emailOptions = {
    from: "doshka23@gmail.com", // sender address
    to: "doshka23@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: qrCode, // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  //3) Actually send the email$

  const info = await transporter.sendMail(emailOptions);

  console.log("Message sent: %s", info.messageId);
};

sendEmail().catch(console.error);

exports.default = sendEmail;
