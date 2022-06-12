const { body } = require('express-validator');

const priorityOptions = [
  'low',
  'medium',
  'high',
  'hot'
]

const createTasksValidationRules = () => {
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
      .custom((value) => {
        const checkPriority = priorityOptions.filter( option => {
          if (value === option) {
            return true
          }
        })
        if (checkPriority.length !== 1) {
          throw new Error(`Priority could not be ${value}`)
        } else {
          return true
        }
      }),
    body('dueDate')
      .notEmpty()
      .withMessage('Due date is required')
      .isISO8601('Date has to be of ISO08601')
      .toDate()
  ]
}

module.exports = {
  createTasksValidationRules
};