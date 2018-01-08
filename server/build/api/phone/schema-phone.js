'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phoneQueries = undefined;

var _phoneFields = require('../fields/phone-fields');

var _phoneFields2 = _interopRequireDefault(_phoneFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake phones\ntype Phone {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _phoneFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var phoneQueries = exports.phoneQueries = '\n  # phone takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Phone (length: Int): Phone\n  PhoneList (length: Int!, locale: String): [Phone]\n';