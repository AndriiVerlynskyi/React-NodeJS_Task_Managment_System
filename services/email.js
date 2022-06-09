const nodemailer = require('nodemailer');

const { EMAIL_SENDER, EMAIL_PASSWORD } =
  process.env || {};

class EmailService {
  constructor() {
    this.mailService = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_SENDER,
        pass: EMAIL_PASSWORD
      }
    });
  }

  sendMail (letterDetails) {
    return this.mailService.sendMail({
      from: EMAIL_SENDER,
      ...letterDetails
    });
  }

  userSignUp(email, token) {
    return this.sendMail({
      to: email,
      subject: 'User registration on taskMS',
      html: `
              <h1>Hello!</h1>
              <p>To finish the registration confirm your account</p>
              <p>Here is the link - <a href="${BASE_URL}/signup/${email}/${token}">Confirm account</a>.</p>
            `
    });
  }

  userSuccessfullySignUp(email) {
    return this.sendMail({
      to: email,
      subject:
        'Successfull registration on taskMS',
      html: `
              <h1>Hello!</h1>
              <p>To finish the registration you have to create a password</p>
              <p>You have successfully registered in our service, your login is ${email}</p>
              <hr />
              <hr />
              <a href="${BASE_URL}">Home page</a>
            `
    });
  }
}

const emailService = new EmailService();

module.exports = {
  emailService
};
