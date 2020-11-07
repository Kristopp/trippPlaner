"use strict";

var express = require('express');

var router = express.Router();

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

var passport = require('passport');

var validateRegisterInput = require('../validation/register');

var validateLoginInput = require('../validation/login');

var User = require('../models/users.model');

console.log(User);
router.post('/register', function (req, res) {
  var _validateRegisterInpu = validateRegisterInput(req.body),
      errors = _validateRegisterInpu.errors,
      isValid = _validateRegisterInpu.isValid;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    email: req.body.email
  }).then(function (user) {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists'
      });
    } else {
      var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, function (err, salt) {
        if (err) console.error('There was an error', err);else {
          bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) console.error('There was an error', err);else {
              newUser.password = hash;
              newUser.save().then(function (user) {
                res.json(user);
              });
            }
          });
        }
      });
    }
  });
});
router.post('/login', function (req, res) {
  var _validateLoginInput = validateLoginInput(req.body),
      errors = _validateLoginInput.errors,
      isValid = _validateLoginInput.isValid;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  var email = req.body.email;
  var password = req.body.password;
  User.findOne({
    email: email
  }).then(function (user) {
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(function (isMatch) {
      if (isMatch) {
        var payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        };
        jwt.sign(payload, 'secret', {
          expiresIn: 3600
        }, function (err, token) {
          if (err) console.error('There is some error in token', err);else {
            res.json({
              success: true,
              token: "Bearer ".concat(token)
            });
          }
        });
      } else {
        errors.password = 'Incorrect Password';
        return res.status(400).json(errors);
      }
    });
  });
});
router.get('/me', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  return res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});
module.exports = router;