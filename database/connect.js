const mongoose = require('mongoose');
const {
  gridFSBucketService
} = require('../shared/services/grid-fs-bucket');

const MONGO_URL = 
  process.env.MONGO_URL || 'mongodb+srv://andrii2022:qwe123@cluster0.vyznt.mongodb.net/?retryWrites=true&w=majority';
const MONGO_DB = process.env.MONGO_DB || 'Task_Management_System';

function connectDb() {
  mongoose.connect(`${MONGO_URL}`, {
    dbName: MONGO_DB,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  const connection = mongoose.connection;

  connection.on(
    'error',
    console.error.bind(console, 'connection error:')
  );
  connection.once('open', () => {
    gridFSBucketService.init(connection.db);

    console.log('connection to database established');
  });

  return connection;
}

module.exports = connectDb();
