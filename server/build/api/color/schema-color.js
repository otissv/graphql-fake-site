'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorQueries = undefined;

var _colorFields = require('../fields/color-fields');

var _colorFields2 = _interopRequireDefault(_colorFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake colors\ntype Color {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _colorFields2.default + ',\n  ' + _nestedFields2.default + ',\n}';
var colorQueries = exports.colorQueries = '\n  # color takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Color (locale: String) : Color\n  ColorList (length: Int!, locale: String): [Color]\n';