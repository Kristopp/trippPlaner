"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mongoose = require("mongoose");

var Schema = mongoose.Schema; //required: true we validate data
//Before we insert

var reqString = {
  type: String,
  required: true
};
var reqNumber = {
  type: Number,
  required: true
};
var formSchema = new Schema({
  title: reqString,
  startDate: {
    type: Date
  },
  Latitude: _objectSpread({}, reqNumber, {
    min: -90,
    max: 90
  }),
  Longitude: _objectSpread({}, reqNumber, {
    min: -180,
    max: 180
  }),
  rating: {
    type: Number,
    min: 0,
    max: 10,
    "default": 0
  },
  category: String,
  details: String,
  whoPays: String,
  pictures: String,
  expense: Number
}, {
  timestamps: true
});
var Form = mongoose.model("Form", formSchema);
module.exports = Form;