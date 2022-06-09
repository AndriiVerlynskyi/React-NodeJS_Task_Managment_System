const { body } = require('express-validator');

const emailValidationRules = () => {
  return [
    body('email')
      .notEmpty()
      .withMessage('Поле обов\'язкове.')
      .isEmail()
      .withMessage('Некоректно введена електронна адреса.')
  ];
};

const usernameValidationRules = () => {
  return [
    body('username')
      .notEmpty()
      .withMessage('Поле обов\'язкове.')
  ];
};

// Rules for registration router
const passwordValidationRules = () => {
  return [
    // Password - required, length 8 - 64 symbols and password validation
    body('password')
      .notEmpty()
      .withMessage("Поле обов'язкове.")
      .isLength({ min: 6, max: 64 })
      .withMessage(
        'Довжина пароля повинна бути від 6 до 64 символів.'
      ),

    body('passwordConfirm')
      .notEmpty()
      .withMessage("Поле обов'язкове.")
      .custom(
        (value, { req }) => value === req.body.password
      )
      .withMessage(
        'Некоректно введене підтвердження пароля.'
      )
  ];
};

module.exports = {
  emailValidationRules,
  usernameValidationRules,
  passwordValidationRules
};
