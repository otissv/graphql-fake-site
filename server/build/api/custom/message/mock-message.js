'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = messageMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function messageMock() {
  return {
    from: _faker2.default.internet.email(),
    to: [_faker2.default.internet.email()],
    date: (0, _moment2.default)(_faker2.default.date.past()).toISOString(),
    cc: [_faker2.default.internet.email()],
    body: _faker2.default.lorem.paragraphs(),
    subject: _casual2.default.title
  };
};