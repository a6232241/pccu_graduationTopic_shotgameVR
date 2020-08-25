"use strict";

var Koa = require('koa');

var app = new Koa();

var router = require('koa-router')();

var logger = require('koa-logger');

var fs = require('fs');

app.use(logger()); // logger 使用者請求反應時間

app.use(function _callee(ctx, next) {
  var start, ms;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          start = new Date();
          _context.next = 3;
          return regeneratorRuntime.awrap(next());

        case 3:
          ms = new Date() - start;
          console.log("".concat(ctx.method, " ").concat(ctx.url, " - ").concat(ms, "ms"));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.use(require('koa-static')(__dirname + '/build'));
router.get('/', function _callee2(ctx, next) {
  var html;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          html = fs.readFileSync(__dirname + '/build/index.html', 'binary');
          ctx.body = html;

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
var PORT = process.env.PORT || '3000';
app.listen(PORT);