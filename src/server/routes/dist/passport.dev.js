"use strict";

var JWTStrategy = require('passport-jwt').Strategy;

console.log("hello");

var ExtractJWT = require('passport-jwt').ExtractJwt;

var mongoose = require('mongoose');

var User = mongoose.model('users');
var opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = function (passport) {
  passport.use(new JWTStrategy(opts, function (jwt_payload, done) {
    User.findById(jwt_payload.id).then(function (user) {
      if (user) {
        return done(null, user);
      }

      return done(null, false);
    })["catch"](function (err) {
      return console.error(err);
    });
  }));
};