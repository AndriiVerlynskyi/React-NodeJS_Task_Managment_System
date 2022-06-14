const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const { EMAIL_SENDER, BASE_URL } = process.env;
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const createGmailTransporter = async () => {
  try {
    const { token } = await oAuth2Client.getAccessToken()
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
          type: 'OAuth2',
          user: 'test.taskms@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: token
        }
    })
  } catch (err) {
    console.log(err)
  }
}
 
const sendUserSignUpEmail = async (email, token) => {
  try {
    const transporter = await createGmailTransporter();
    const mail = await transporter.sendMail({
      from: `<${EMAIL_SENDER}>`,
      to: email,
      subject: 'User registration on taskinMS',
      html: `
        <h1>Hello!</h1>
        <p>To finish the registration confirm your account</p>
        <p>Here is the link - <a href="${BASE_URL}/signup/${email}/${token}">confirm account</a>.</p>
      `
    });
    return mail
  } catch (err) {
    return err
  }
}

const sendUserSuccessfullySignUpEmail = async (email) => {
  const transporter = await createGmailTransporter();
  return await transporter.sendMail({
    from: `<${EMAIL_SENDER}>`,
    to: email,
    subject: 'Successfull registration on taskinMS',
    text: `Signed up succesfully. Here is the link: ${BASE_URL}`,
    html: `
      <h1>Hello!</h1>
      <p>You have successfully registered in our service, your login is ${email}</p>
      <hr />
      <a href="${BASE_URL}/signin">To the app.</a>
    `
  });
}

module.exports = {
  sendUserSignUpEmail,
  sendUserSuccessfullySignUpEmail
};
