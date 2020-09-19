"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listFormEntries = listFormEntries;
var API_URL = 'http://localhost:5000';

function listFormEntries() {
  var response;
  return regeneratorRuntime.async(function listFormEntries$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(API_URL, "/form")));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.json());

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}