const { body } = require('express-validator');

const tasksValidationRules = () => {
  return [
    body('title')
      .notEmpty()
      .withMessage('Title is required'),
    body('description')
      .notEmpty()
      .withMessage('Description is required'),
    body('priority')
      .notEmpty()
      .withMessage('You should choose the priority')
      .isNumeric()
      .withMessage('Priority has to be a number'),
    body('dueDate')
      .notEmpty()
      .withMessage('Due date is required')
  ]
}

module.exports = {
  tasksValidationRules
};