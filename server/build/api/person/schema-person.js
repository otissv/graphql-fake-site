'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.personQueries = undefined;

var _personFields = require('../fields/person-fields');

var _personFields2 = _interopRequireDefault(_personFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake people\ntype Person {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _personFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var personQueries = exports.personQueries = '\n  # person takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Person (length: Int): Person\n  PersonList (length: Int!, locale: String) : [Person]\n';