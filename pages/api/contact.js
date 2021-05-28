export default function (req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");

  const credentials = {
    user: "crisvdotco@gmail.com",
    pass: `${process.env.EMAIL_PASSWORD}`,
  };

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: credentials,
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: "crisvdotco@gmail.com",
    subject: `Message From ${req.body.name}`,
    html: `<div>type: ${req.body.type}</div>
           <div>event: ${req.body.event}</div>
           <div>date: ${req.body.date}</div>
           <div>budget: ${req.body.budget}</div>
           <div>${req.body.description}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else {
      res.send("success");
    }
  });
}
