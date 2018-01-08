'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hackerQueries = undefined;

var _hackerFields = require('../fields/hacker-fields');

var _hackerFields2 = _interopRequireDefault(_hackerFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake hackers\ntype Hacker {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _hackerFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var hackerQueries = exports.hackerQueries = '\n  # hacker takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Hacker (locale: String): Hacker\n  HackerList (length: Int!, locale: String): [Hacker]\n';