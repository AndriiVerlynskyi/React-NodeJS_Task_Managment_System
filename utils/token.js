const jwt = require('jsonwebtoken');

const {
  SECRET_JWT_KEY_SIGN_IN,
  EXPIRE_JWT_TIME_SIGN_IN,
  SECRET_JWT_KEY_SIGN_UP,
  EXPIRE_JWT_TIME_SIGN_UP
} = process.env || {}

module.exports.createSignUpToken = ( user ) => {
  return jwt.sign(
    { email: user.email, _id: user._id },
    SECRET_JWT_KEY_SIGN_UP,
    { expiresIn: Number(EXPIRE_JWT_TIME_SIGN_UP) }
  );
};

module.exports.createSignInToken = ( user ) => {
  return jwt.sign(
    { email: user.email, _id: user._id },
    SECRET_JWT_KEY_SIGN_IN,
    { expiresIn: Number(EXPIRE_JWT_TIME_SIGN_IN) }
  );
}