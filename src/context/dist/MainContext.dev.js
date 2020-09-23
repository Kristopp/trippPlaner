"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initalState = [{
  title: String,
  startDate: {
    type: Date
  },
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
}];

var _default = _react["default"].createContext(initalState);

exports["default"] = _default;