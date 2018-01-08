'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = meetingMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _helpersFakegql = require('../../helpers-fakegql');

var _mockPerson = require('../../person/mock-person');

var _mockPerson2 = _interopRequireDefault(_mockPerson);

var _mockAddress = require('../../address/mock-address');

var _mockAddress2 = _interopRequireDefault(_mockAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function meetingMock(_ref) {
  var roles = _ref.roles;

  return {
    allDay: _faker2.default.random.boolean(),
    address: (0, _mockAddress2.default)(),
    invited: [(0, _mockPerson2.default)(), (0, _mockPerson2.default)(), (0, _mockPerson2.default)()],
    description: _faker2.default.lorem.sentence(),
    end: (0, _helpersFakegql.getDates)().endDate,
    start: (0, _helpersFakegql.getDates)().startDate,
    title: _casual2.default.title
  };
};