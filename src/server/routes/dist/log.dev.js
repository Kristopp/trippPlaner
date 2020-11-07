"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();
router.get('/', function (req, res) {
  res.json({
    message: 'OMG'
  });
});
router.post('/', function _callee(req, res, next) {
  var logEntry, createdEntry;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          logEntry = new logEntry(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(logEntry.save());

        case 4:
          createdEntry = _context.sent;
          res.json(createdEntry);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 11:
          console.log(req.body);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;