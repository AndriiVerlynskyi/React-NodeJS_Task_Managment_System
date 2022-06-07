const express = require('express');
const passport = require('passport');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
require('./middlewares/passport')(passport);

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})