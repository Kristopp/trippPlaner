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

          /*     const category = req.body.category;
          const details = req.body.details;
          const whoPays = req.body.whoPays;
          const pictures = req.body.pictures;
          const expense = req.body.expense; */
          //Create new form body
          newForm = new Form(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(newForm.save());

        case 4:
          createFormEntry = _context.sent;
          res.json(createFormEntry);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);

          if (_context.t0.name === 'ValidationError') {
            res.status(422);
          }

          next(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
/* .then(() => res.json('form add!'))
.catch(err => res.status(400).json('Error ' + err)) */

module.exports = router;