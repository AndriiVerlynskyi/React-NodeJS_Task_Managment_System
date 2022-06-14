const express = require('express');
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();

const connectDb = require('./database/connect');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDb();

app.use(passport.initialize());
require('./middlewares/passport')(passport);

require('./routes')(app); 

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})