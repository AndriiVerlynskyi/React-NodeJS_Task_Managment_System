const express = require('express');
const passport = require('passport');

const { validate } = require('../../middlewares/validate');

const { tasksValidationRules } = require('../../validation/tasksValidation');

const controller = require('./controller');

const router = express.Router();

router.get(
  '/task',
  passport.authenticate('jwt', {session: false}),
  controller.getAllTasks
)

router.get(
  '/task/:taskId',
  passport.authenticate('jwt', {session: false}),
  controller.getTask
)

router.post(
  '/task/add',
  passport.authenticate('jwt', {session: false}),
  tasksValidationRules(),
  validate,
  controller.createTask
)

router.delete(
  'task/delete/:taskId',
  passport.authenticate('jwt', {session: false}),
  controller.deleteTask
)

router.put(
  'task/changeIsDone/:taskId',
  passport.authenticate('jwt', {session: false}),
  controller.changeIsDone
)

router.put(
  '/task/edit/:taskId',
  passport.authenticate('jwt', {session: false}),
  tasksValidationRules(),
  validate,
  controller.editTask
)

module.exports = router;
