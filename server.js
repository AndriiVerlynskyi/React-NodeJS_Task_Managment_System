const express = require('express');
const cors = require('cors');
const passport = require('passport');

const connectDb = require('./database/connect');

const authRouter = require('./routes/auth');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use(passport.initialize());
require('./middlewares/passport')(passport);

require('./routes')(app); 

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})