const mongoose = require('mongoose');

const MONGO_URL = 
  process.env.MONGO_URL || 
    'mongodb+srv://andrii2022:qwe123@cluster0.vyznt.mongodb.net/?retryWrites=true';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'Task_Management_System';

function connectDb() {
  mongoose.connect(`${MONGO_URL}/${MONGO_DB_NAME}`, {
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
