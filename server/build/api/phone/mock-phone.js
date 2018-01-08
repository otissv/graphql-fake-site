'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = phoneMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function phoneMock() {
  return {
    phoneNumber: _faker2.default.phone.phoneNumber(),
    phoneNumberFormat: _faker2.default.phone.phoneNumberFormat(),
    phoneFormats: _faker2.default.phone.phoneFormats()
  };
};