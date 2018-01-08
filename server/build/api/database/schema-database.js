'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.databaseQueries = undefined;

var _databaseFields = require('../fields/database-fields');

var _databaseFields2 = _interopRequireDefault(_databaseFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake databases\ntype Database {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _databaseFields2.default + ',\n  ' + _nestedFields2.default + '\n}';
var databaseQueries = exports.databaseQueries = '\n  # database takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Database (locale: String) : Database\n  DatabaseList (length: Int!, locale: String): [Database]\n';