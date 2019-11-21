const nodemailer = require('nodemailer');

const APP_HOST = process.env.APP_HOST || 'http://localhost:3000'

const user = process.env.MAIL_USER
const pass = process.env.MAIL_PASS

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user, pass }
});

module.exports.sendValidateEmail = (targetUser) => {
  transporter.sendMail({
    from: `auth`,
    to: targetUser.email,
    subject: 'auth', 
    text: 'auth',
    html: `<p><a href="http://localhost:3000/users/${targetUser.validateToken}/validate">wellcme</a></p>`
  })
    .then(info => console.log(info))
    .catch(error => console.log(error))
  
}
