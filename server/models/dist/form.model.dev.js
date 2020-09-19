"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema; //required: true we validate data
//Before we insert

var reqString = {
  type: String,
  required: true
};
var formSchema = new Schema({
  title: reqString,
  startDate: {
    type: Date
  },
  Latitude: {
    type: Number,
    min: -90,
    max: 90
  },
  Longitude: {
    type: Number,
    min: -180,
    max: 180
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    "default": 0
  },
  category: {
    type: String,
    required: true
  },
  details: String,
  whoPays: String,
  pictures: String,
  expense: Number
}, {
  timestamps: true
});
var Form = mongoose.model("Form", formSchema);
module.exports = Form;