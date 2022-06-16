const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGODB_URI;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'Task_Management_System';

function connectDb() {
  mongoose.connect(`${MONGO_URL}`, {
    dbName: MONGO_DB_NAME,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    retryWrites: false
  });

  const connection = mongoose.connection;

  connection.on(
    'error',
    console.error.bind(console, 'connection error:')
  );

  console.log('Database is connected')

  return connection;
}

module.exports = connectDb;
