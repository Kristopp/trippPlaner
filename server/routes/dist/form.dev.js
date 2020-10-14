"use strict";

var router = require('express').Router();

var Form = require('../models/form.model');

router.route('/').get(function (req, res) {
  //returns promise
  Form.find().then(function (form) {
    return res.json(form);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
router.route('/').post(function _callee(req, res, next) {
  var newForm, createFormEntry;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newForm = new Form(req.body);
          console.log(newForm);
          _context.next = 5;
          return regeneratorRuntime.awrap(newForm.save());

        case 5:
          createFormEntry = _context.sent;
          res.json(createFormEntry);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);

          if (_context.t0.name === 'ValidationError') {
            res.status(422);
          }

          next(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
module.exports = router;