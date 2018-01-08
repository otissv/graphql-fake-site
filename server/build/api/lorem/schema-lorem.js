'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loremQueries = undefined;

var _loremFields = require('../fields/lorem-fields');

var _loremFields2 = _interopRequireDefault(_loremFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake lorem ipsum\ntype Lorem {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _loremFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var loremQueries = exports.loremQueries = '\n  # lorem takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Lorem (locale: String): Lorem\n  LoremList (length: Int!, locale: String): [Lorem]\n';