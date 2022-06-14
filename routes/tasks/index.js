const express = require('express');
const passport = require('passport');

const { validate } = require('../../middlewares/validate');

const { createTasksValidationRules } = require('../../validation/tasksValidation');

const controller = require('./controller');

const router = express.Router();

router.get(
  '/',
  passport.authenticate('jwt', {session: false}),
  controller.getAllTasks
)

router.get(
  '/:taskId',
  passport.authenticate('jwt', {session: false}),
  controller.getTask
)

router.post(
  '/',
  passport.authenticate('jwt', {session: false}),
  createTasksValidationRules(),
  validate,
  controller.createTask
)

router.delete(
  '/:taskId',
  passport.authenticate('jwt', {session: false}),
  controller.deleteTask
)

router.put(
  '/changeIsDone/:taskId',
  passport.authenticate('jwt', {session: false}),
  controller.changeIsDone
)

router.put(
  '/:taskId',
  passport.authenticate('jwt', {session: false}),
  controller.editTask
)

module.exports = router;
