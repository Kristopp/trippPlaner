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
router.route('/add').post(function (req, res) {
  var category = req.body.category;
  var details = req.body.details;
  var whoPays = req.body.whoPays;
  var pictures = req.body.pictures;
  var expense = req.body.expense;
  var newForm = new Form({
    category: category,
    details: details,
    whoPays: whoPays,
    pictures: pictures,
    expense: expense
  });
  newForm.save().then(function () {
    return res.json('form add!');
  })["catch"](function (err) {
    return res.status(400).json('Error ' + err);
  });
});
module.exports = router;