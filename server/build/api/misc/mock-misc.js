'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = miscMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function miscMock() {
  return {
    languageCode: _casual2.default.language_code,
    locale: _casual2.default.locale,
    boolean: _casual2.default.boolean,
    alphaNumeric: _faker2.default.random.alphaNumeric(),
    randomize: _faker2.default.helpers.randomize()
  };
};