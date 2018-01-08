'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internetQueries = undefined;

var _internetFields = require('../fields/internet-fields');

var _internetFields2 = _interopRequireDefault(_internetFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake internets\ntype Internet {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _internetFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var internetQueries = exports.internetQueries = '\n  # internet takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Internet (locale: String): Internet\n  InternetList (length: Int!, locale: String): [Internet]\n';