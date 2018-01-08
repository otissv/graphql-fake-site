'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = personMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function personMock() {
  return {
    name: _faker2.default.name.prefix() + ' ' + _faker2.default.name.firstName() + ' ' + _faker2.default.name.lastName(),
    email: _faker2.default.internet.email(),
    username: _faker2.default.internet.userName(),
    firstName: _faker2.default.name.firstName(),
    lastName: _faker2.default.name.lastName(),
    fullName: _faker2.default.name.firstName() + ' ' + _faker2.default.name.lastName(),
    password: _faker2.default.internet.password(),
    namePrefix: _faker2.default.name.prefix(),
    nameSuffix: _faker2.default.name.suffix(),
    jobTitle: _faker2.default.name.title(),
    jobDescriptor: _faker2.default.name.jobDescriptor(),
    jobArea: _faker2.default.name.jobArea(),
    jobType: _faker2.default.name.jobType()
  };
};