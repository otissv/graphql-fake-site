'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addressQueries = undefined;

var _addressFields = require('../fields/address-fields');

var _addressFields2 = _interopRequireDefault(_addressFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake addresses\ntype Address {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _addressFields2.default + ',\n  ' + _nestedFields2.default + ',\n}';
var addressQueries = exports.addressQueries = '\n  # address takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Address(locale: String): Address\n  AddressList (length: Int!, locale: String): [Address]\n';