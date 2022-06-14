const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
  SECRET_JWT_KEY_SIGN_UP
} = process.env || {};

const { User } = require('../../database/models/index');

const {
  sendUserSignUpEmail,
  sendUserSuccessfullySignUpEmail
} = require('../../services/email');

const {
  createSignInToken,
  createSignUpToken
} = require('../../utils/token');

module.exports.signUpSendLetter = async (req, res) => {

  const { username, email, password } = req.body;

  let candidate = await User.findOne({username});

  if (candidate) {
    try {
      const token = createSignUpToken(candidate.email);
      await sendUserSignUpEmail(candidate.email, token);
      return res.status(200).json({
        error: false,
        message: 'Confirmation letter is on user email'
      })
    } catch (err) {
      return res.status(404).send({
        error: true,
        message: 'Failed to send email'
      })
    }
  }

  candidate = await User.findOne({email})

  if (candidate) {
    try {
      await sendUserSignUpEmail(candidate.email, token);
      return res.status(200).json({
        error: false,
        message: 'Confirmation letter is on user email'
      })
    } catch (err) {
      return res.status(404).send({
        error: true,
        message: 'Failed to send email'
      })
    }
  } 
  
  const salt = bcrypt.genSaltSync(10);

  const user = new User({
    username,
    email,
    password: bcrypt.hashSync(password, salt),
    confirmedAt: null
  })

  try {
    const newUser = await user.save();

    try {
      const token = createSignUpToken(newUser);
      await sendUserSignUpEmail(email, token);
    } catch (err) {
      return res.status(404).send({...err, messag: 'Failed to send mail'});
    }

    res.status(200).send({
      error: false,
      message:'Email was sent successfully to the email'
    })
  } catch (err) {
    res.status(500).send({ message: err.message, error: true })
  }
}

module.exports.signUpConfirmation = async (req, res) => {
  const { token, email: inputEmail } = req.body;

  jwt.verify(
    token,
    SECRET_JWT_KEY_SIGN_UP,
    async (err, payload) => {
      if (err) {
        return res.status(422).json({
          error: true,
          message:
            'Link for email confirmation is not valid'
        });
      }

      const { email } = payload;

      if (inputEmail === email) {
        try {
          await User.findOneAndUpdate(
            { email },
            { $set:{ confirmedAt: new Date().toISOString()}}
          )

          try {
            await sendUserSuccessfullySignUpEmail(email)
          } catch (err) {
            return res.status(404).send({
              error: true,
              message: 'Failed to send the letter'
            })
          }
  
          res.status(200).send({
            error: false,
            message:'User was successfully confirmed'
          })
        } catch (err) {
          res.status(500).json({
            error: true,
            message: err.message ? err.message : err
          })
        }
      } else {
        res.status(401).send({
          error: true,
          message: 'This link is wrong'
        })
      }
    }
  )
}

module.exports.signIn = async (req, res) => {
  const { login, password } = req.body;

  const candidate = await User.findOne({
    $or: [
      {username: login},
      {email: login}
    ]
  })

  if (candidate) {
    const { confirmedAt } = candidate;

    if (confirmedAt === null) {
      const token = createSignUpToken(candidate);
      await sendUserSignUpEmail(candidate.email, token);

      return res.status(401).send({
        message: 'User haven\'t confirmed the email',
        notConfirmed: true
      })
    }

    const checkedPassword = bcrypt.compareSync(
      password,
      candidate.password
    )
    if (checkedPassword) {
      const token = createSignInToken(candidate);

      res.status(200)
        .set('Authorization', `Bearer ${token}`)
        .json({
          token,
          user: candidate,
          notConfirmed: false
        })
    } else {
      res.status(401).send({
        message: 'Email and password do not match',
        notConfirmed: false
      })
    }
  } else {
    res.status(404).send({
      message:'User is not found',
      notConfirmed: false
    })
  }
}

module.exports.getUserData = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);

    return res.status(200).send(user)
  } catch (err) {
    res.status(500).send({
      message: 'Error occured on server'
    })
  }
}
