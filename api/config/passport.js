var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var database = require('../database');
var config = require('../config/auth');

module.exports = function(passport){
  var opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, verify));
  async function verify(jwt_payload, done) {
    try {
      user = await database.getUserByEmail(jwt_payload.email);
    } catch (e) {
      return done(e, false);
    }
    if (user) {
      return done(null, user);
    }
    else {
      return done(null, false);
    }
  }
}
