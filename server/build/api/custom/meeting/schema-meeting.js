'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meetingQueries = undefined;

var _meetingFields = require('../../fields/meeting-fields');

var _meetingFields2 = _interopRequireDefault(_meetingFields);

var _nestedFields = require('../../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake meeting data\ntype Meeting {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _meetingFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var meetingQueries = exports.meetingQueries = '\n  # meeting takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Meeting (locale: String) : Meeting\n  MeetingList (length: Int!, locale: String): [Meeting]\n';