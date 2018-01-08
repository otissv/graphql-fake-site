'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _mockAddress = require('../../address/mock-address');

var _mockAddress2 = _interopRequireDefault(_mockAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function userMock(_ref) {
  var roles = _ref.roles;

  return {
    _id: _casual2.default.uuid,
    name: _casual2.default.name,
    email: _casual2.default.email,
    username: _casual2.default.username,
    firstName: _casual2.default.first_name,
    lastName: _casual2.default.last_name,
    fullName: _casual2.default.full_name,
    password: _casual2.default.password,
    namePrefix: _casual2.default.name_prefix,
    nameSuffix: _casual2.default.name_suffix,
    jobTitle: _faker2.default.name.title(),
    jobDescriptor: _faker2.default.name.jobDescriptor(),
    jobArea: _faker2.default.name.jobArea(),
    jobType: _faker2.default.name.jobType(),

    avatar: _faker2.default.image.avatar(),
    address: (0, _mockAddress2.default)(),
    company: {
      _id: _casual2.default.uuid,
      companyName: _faker2.default.company.companyName()
    },
    phoneNumber: _faker2.default.phone.phoneNumber(),
    website: _faker2.default.internet.domainName(),
    roles: roles
  };
};