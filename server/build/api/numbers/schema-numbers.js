'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbersQueries = undefined;

var _numbersFields = require('../fields/numbers-fields');

var _numbersFields2 = _interopRequireDefault(_numbersFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake numbers\ntype Numbers {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _numbersFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var numbersQueries = exports.numbersQueries = '\n  # numbers takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Numbers (length: Int): Numbers\n  NumbersList (length: Int!, locale: String): [Numbers]\n';