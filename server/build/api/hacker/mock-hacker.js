'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hackerMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hackerMock() {
  return {
    hackerAbbreviation: _faker2.default.hacker.abbreviation(),
    hackerAdjective: _faker2.default.hacker.adjective(),
    hackerNoun: _faker2.default.hacker.noun(),
    hackerVerb: _faker2.default.hacker.verb(),
    hackerIngverb: _faker2.default.hacker.ingverb(),
    hackerPhrase: _faker2.default.hacker.phrase()
  };
};