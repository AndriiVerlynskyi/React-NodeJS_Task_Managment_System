const { validationResults } = require('express-validation');

const validate = (req, res, next) => {
  const errors = validationResults(req);

  if (errors.isEmpty()) return next();

  const extractedErrors = {};
  errors.array().forEach(err => { 
    if(!extractedErrors[err.param]) extractedErrors[err.param] = err.msg; 
  });

  return res.status(422).json({
    errors: extractedErrors
  })
}

module.exports = {
  validate
}