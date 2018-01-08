'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = metaMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _mockUser = require('../user/mock-user');

var _mockUser2 = _interopRequireDefault(_mockUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function metaMock(_ref) {
  var roles = _ref.roles;

  return {
    created: (0, _moment2.default)(_faker2.default.date.past()).toISOString(),
    createdBy: (0, _mockUser2.default)({ roles: roles }),
    updated: (0, _moment2.default)(_faker2.default.date.recent()).toISOString(),
    updatedBy: (0, _mockUser2.default)({ roles: roles })
  };
};