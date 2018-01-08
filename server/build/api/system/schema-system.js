'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemQueries = undefined;

var _systemFields = require('../fields/system-fields');

var _systemFields2 = _interopRequireDefault(_systemFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake systems\ntype System {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _systemFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var systemQueries = exports.systemQueries = '\n  # system takes an optional length parameter as an argument. If length is defined 1 item is returned\n  System (length: Int): System\n  SystemList (length: Int!, locale: String): [System]\n';