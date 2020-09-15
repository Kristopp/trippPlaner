"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var formSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  whoPays: {
    type: String,
    required: true
  },
  pictures: {
    type: String,
    required: true
  },
  expense: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
var Form = mongoose.model('Form', formSchema);
module.exports = Form;