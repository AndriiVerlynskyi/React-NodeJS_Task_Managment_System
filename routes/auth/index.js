const express = require('express');
const passport = require('passport');

const {
  emailValidationRules,
  usernameValidationRules,
  passwordValidationRules
} = require('../../validation/authValidation');

const { validate } = require('../../middlewares/validate');

const controller = require('./controller');

const router = express.router();

router.post(
  '/signup/sendLetter',
  passport.authenticate('jwt', {session: false}),
  emailValidationRules(),
  usernameValidationRules(),
  passwordValidationRules(),
  validate,
  controller.signUpSendLetter
)

router.post(
  'signup/confirmation',
  passport.authenticate('jwt', {session: false}),
  controller.signUpConfirmation
)

router.post(
  '/signin',
  passport.authenticate('jwt', {session: false}),
  controller.signIn()
)

module.exports = router;
