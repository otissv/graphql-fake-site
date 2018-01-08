'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.miscQueries = undefined;

var _miscFields = require('../fields/misc-fields');

var _miscFields2 = _interopRequireDefault(_miscFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake misc data\ntype Misc {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _miscFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var miscQueries = exports.miscQueries = '\n  # misc takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Misc (length: Int): Misc\n  MiscList (length: Int!, locale: String): [Misc]\n';