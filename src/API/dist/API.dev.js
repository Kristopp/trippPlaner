"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listFormEntries = listFormEntries;
exports.addFormEntries = addFormEntries;
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

function addFormEntries(entry) {
  var response;
  return regeneratorRuntime.async(function addFormEntries$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(API_URL, "/form"), {
            //use post method to upload form into mongo
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(entry)
          }));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.json());

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}