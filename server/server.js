require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require('nodemailer');
const { Resend } = require('resend');

const host = process.env.HOST;
const PORT = process.env.PORT;
const user = process.env.USER;
const resend = new Resend(process.env.API);
const userpassword = process.env.USERPASSWORD;

app.use(cors({origin: 'https://que-portfoliov2-1.onrender.com'}));    
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/api/post', async (req, res) => {
    const {name, subject, emailData, phone, message} = req.body;

    if(!name || !subject || !emailData || !phone || !message){
        return res.status(400).json({error: 'all fields a required'})
    }

const adminHtml = `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2> ${subject}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${emailData}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  </div>
`;


const userHtml = `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2>Thanks for Reaching Out!</h2>
    <p>Hi ${name},</p>
    <p>Thank you for contacting me. I’ve received your message and I’ll get back to you as soon as possible.</p>
    <p>Looking forward to connecting with you!</p>
    <p>Best regards, </p>
    <p>Quekeneth S. Lacanaria</p>
  </div>
`;

try{
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to:  user,
    subject: subject,
    html: adminHtml
  });

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: emailData,
    subject: "Thanks for Reaching out",
    html: userHtml
  });

  res.status(200).json({success: true, message: 'Email sent successfully!'})

}catch(error){
  console.log('error -> ', error);
  res.status(500).json({success: false, message: 'Something went wrong'});
}

})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
