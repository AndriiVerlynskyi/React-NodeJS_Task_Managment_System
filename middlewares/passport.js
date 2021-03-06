const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const { User } = require('../database/models');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_JWT_KEY_SIGN_IN || 'Secret'
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await User.findById(payload._id)

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (e) {
        console.log(e.message);
        done(e, null)
      }
    })
  );
};