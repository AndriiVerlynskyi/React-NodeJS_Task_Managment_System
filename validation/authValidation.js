const { body } = require('express-validator');

const emailValidationRules = () => {
  return [
    body('email')
      .notEmpty()
      .withMessage('Email is required')
      .normalizeEmail()
      .isEmail()
      .withMessage('Put correct email')
  ];
};

const usernameValidationRules = () => {
  return [
    body('username')
      .notEmpty()
      .withMessage('Username is required')
  ];
};

// Rules for registration router
const passwordValidationRules = () => {
  return [
    body('password')
      .notEmpty()
      .withMessage('Password is required')
      .isLength({ min: 6 })
      .withMessage(
        'Password has to be of at least 6 symbols'
      )
  ];
};

module.exports = {
  emailValidationRules,
  usernameValidationRules,
  passwordValidationRules
};
