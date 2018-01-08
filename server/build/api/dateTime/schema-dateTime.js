'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateTimeQueries = undefined;

var _dateTimeFields = require('../fields/dateTime-fields');

var _dateTimeFields2 = _interopRequireDefault(_dateTimeFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake dateTimes\ntype DateTime {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _dateTimeFields2.default + ',\n  ' + _nestedFields2.default + '\n}';
var dateTimeQueries = exports.dateTimeQueries = '\n  # dateTime takes an optional length parameter as an argument. If length is defined 1 item is returned\n  DateTime (locale: String): DateTime\n  DateTimeList (length: Int!, locale: String): [DateTime]\n';