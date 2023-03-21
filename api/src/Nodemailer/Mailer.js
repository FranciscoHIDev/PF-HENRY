const nodemailer = require("nodemailer");
require("dotenv").config();
const { USSER, PASS } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  //secure: true, // true for 465, false for other ports
  auth: {
    // user: `${USER}`, // generated ethereal user
    // pass: `${PASS}`, // generated ethereal password
    user: USSER, // generated ethereal user
    pass: PASS, // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("ready for send emails");
});

const eMail1 = async (email) => {
  let mensaHTM = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      p, a, h1, h2, h3, h4, h5 {font-family: 'Roboto', sans-serif !important;}
      h1{font-size: 60px !important;}
      h2{font-size: 45px !important;}
      h3{font-size: 35px !important;}
      h4{font-size: 25px !important;}
      h5{font-size: 15px !important;}
      p, a{font-size: 15px !important;}
    </style>
  </head>
  <div style="width: 100%; background-color: #e3e3e3;">
    <div style="padding: 20px 10px 20px 10px;">
      <div style="background-color: rgb(6, 16, 155); padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
      <img src="https://ucarecdn.com/f3f76eca-89d4-413c-97ea-64a3bc9c1707/logow.png" alt="" style="width: 200px; height: 80px; border: 2px solid rgb(8, 8, 8);">
      </div>
    </div>
    <div style="background-color: #e3e3e3; margin-top: 0px; padding: 20px 0px 5px 0px; text-align: center;">
      <h2>Welcome to CarMania</h2>
      <p>We are a platform dedicated to the sale of vehicles. Where we offer you a wide variety of options.</p>
      <p>THANK YOU FOR BEING PART OF OUR GROUP</p>
      <div style="display: flex; padding: 20px 10px 20px 10px; ">
        <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
          <img src="https://ucarecdn.com/b11f4989-21e4-4fc9-9631-a9dda0a87782/logon1.png" alt="" style="width: 300px;" />
          <p > Any questions contact us from our page or through our digital channels. <br> WE WILL WAIT FOR YOU </p>
        </div>
      </div>
      <P style="margin-bottom: 10px;"><i>Sincerely:</i><br><br> CarMania Group </P>
      <a style="background-color: rgb(6, 16, 155); border: 2px solid rgb(8, 8, 8); color: rgb(199, 186, 5); padding: 16px 32px; text-align: center; text-decoration: none; font-weight: bold; display: inline-block; font-size: 16px; margin: 4px 2px;
      transition-duration: 0.4s; cursor: pointer;" href="https://carmania-henry.netlify.app/">CarMania</a>
      <div style="background-color: rgb(6, 16, 155); color: rgb(199, 186, 5); padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
        <p style="font-size: 20px; padding: 0px 20px 0px 20px;">Soporte</p>
        <p>Contact us through the following channels:<br><br>
          <a href="info.carmania2023@gmail.com" style="color: rgb(199, 186, 5);"><img src="https://ucarecdn.com/536d8731-dfa6-49e7-ab49-fc204b464708/" style="width: 30px; height: 30px;"/></a>
          <a href="+549114586709" style="color: rgb(199, 186, 5);"><img src="https://ucarecdn.com/7e8ca567-e42a-442d-9949-00af92194412/124034.png" style="width: 30px; height: 30px;"/></a>
          <a href="https://www.facebook.com/profile.php?id=100090972464782&_rdc=2&_rdr" style="color:rgb(199, 186, 5);"><img src="https://ucarecdn.com/96346a92-c11f-4bb9-8663-d454362c3469/iconofacebook1.png" style="width: 30px; height: 30px;"/></a>
          <a href="https://www.instagram.com/carmania_2023/"style="color: #9faa09;"><img src="https://ucarecdn.com/a8624f95-6615-487b-a1ad-09117e6ee150/instagram.jpg" style="width: 30px; height: 30px;"/></a>
        </p>
        <p style="background-color: black; padding: 10px 0px 10px 0px ; font-size: 12 !important;">
        @ 2023 CarMania, all rights reserved.</p>
      </div>
    </div>
  <div></div>
  </div>
  <body>
    
  </body>
  </html>
    `;
  let mensaje = {
    from: '"CarMania" <info.carmania2023@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Notificación", // Subject line
    text: "USER CREATED SUCCESSFULLY", // plain text body
    html: mensaHTM,
    attachments: [
      {
        filename: "logon1.png",
        path: "https://ucarecdn.com/b11f4989-21e4-4fc9-9631-a9dda0a87782/logon1.png",
        cid: "logon1",
      },
      {
        filename: "124034.png",
        path: "https://ucarecdn.com/7e8ca567-e42a-442d-9949-00af92194412/124034.png",
        cid: "124034",
      },
    ],
  };

  const info = await transporter.sendMail(mensaje);

  console.log(info);
};
module.exports = { eMail1 };