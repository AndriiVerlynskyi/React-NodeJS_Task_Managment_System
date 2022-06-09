const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
  SECRET_JWT_KEY_SIGN_IN,
  EXPIRE_JWT_TIME_SIGN_IN,
  SECRET_JWT_KEY_SIGN_UP,
  EXPIRE_JWT_TIME_SIGN_UP
} = process.env || {};

const { User } = require('../../database/models/index');

const { emailService } = require('../../services/email');

module.exports.signUpSendLetter = async (req, res) => {
  const { username, email, password } = req.body;

  let candidate = await User.findOne({username})

  if (candidate) {
    return res.status(409).send({
      message: 'User with such username is already exists'
    })
  }

  candidate = await User.findOne({email})

  if (candidate) {
    return res.status(409).send({
      message: 'User with such email is already exists'
    })
  } 
  
  const salt = bcryptjs.genSaltSync(10);

  const user = new User({
    username,
    email,
    password: bcrypt.hashSync(password, salt),
    confirmedAt: null
  })

  const token = jwt.sign(
    { email },
    SECRET_JWT_KEY_SIGN_UP,
    { expiresIn: Number(EXPIRE_JWT_TIME_SIGN_UP) }
  );

  try { 
    await user.save();

    try {
      await emailService.userSignUp(email, token)
    } catch (err) {
      return res.status(404).send(err.message)
    }

    res.status(200).send({
      message:'Email was sent successfully to the email'
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports.signUpConfirmation = async (req, res) => {
  const { token } = req.body;

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

      try {
        await User.findOneAndUpdate(
          { email },
          { $set:{ confirmedAt: new Date().getTime()}}
        )

        res.status(200).send({
          message:'User was successfully confirmed'
        })
      } catch (err) {
        res.status(500).json({
          error: true,
          message: err.message ? err.message : err
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
      const token = jwt.sign(
        { email },
        SECRET_JWT_KEY_SIGN_IN,
        { expiresIn: Number(EXPIRE_JWT_TIME_SIGN_IN) }
      );

      res.status(200).send({
        message: 'Successfully signed in',
        token,
        notConfirmed: false
      })
    } else {
      res.status(401).send({
        message: 'Email and password do not match',
        notConfirmed: false
      })
    }
  }
}

// module.exports.verifyUser = async (req, res) => {
//   try {
//     const { user, headers } = req;
//     const { authorization } = headers

//     res.status(200)
//       .set('Authorization', authorization)
//       .send(user)
//   } catch (err) {
//     res.status(401).end();
//   }
// }
