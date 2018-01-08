'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commerceQueries = undefined;

var _commerceFields = require('../fields/commerce-fields');

var _commerceFields2 = _interopRequireDefault(_commerceFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake commerce\ntype Commerce {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id: String,\n  \n  ' + _commerceFields2.default + ',\n  ' + _nestedFields2.default + '\n}';
var commerceQueries = exports.commerceQueries = '\n  # commerce takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Commerce (locale: String): Commerce\n  CommerceList (length: Int!, locale: String): [Commerce]\n';