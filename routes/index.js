const authRouter = require('./auth');
const taskRouter = require('./tasks');

module.exports = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/task', taskRouter);
};
