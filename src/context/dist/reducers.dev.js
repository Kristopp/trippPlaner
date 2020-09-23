"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstReducer = void 0;

var consoleLog = function consoleLog() {
  console.log("hello");
};

var firstReducer = function firstReducer(state, action) {
  switch (action.type) {
    case "WORK":
      return consoleLog;

    default:
      return state;
  }
};

exports.firstReducer = firstReducer;