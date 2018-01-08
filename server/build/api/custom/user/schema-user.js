'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userQueries = undefined;

var _userFields = require('../../fields/user-fields');

var _userFields2 = _interopRequireDefault(_userFields);

var _addressFields = require('../../fields/address-fields');

var _addressFields2 = _interopRequireDefault(_addressFields);

var _nestedFields = require('../../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake users\ntype UserAddress {\n  ' + _addressFields2.default + '\n}\n\ntype User {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _userFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var userQueries = exports.userQueries = '\n  # user takes an optional length parameter as an argument. If length is defined 1 item is returned\n  User (locale: String, roles: [String]): User\n  UserList (length: Int!, locale: String, roles: [String]) : [User]\n';