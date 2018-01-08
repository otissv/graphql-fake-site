'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metaQueries = undefined;

var _metaFields = require('../../fields/meta-fields');

var _metaFields2 = _interopRequireDefault(_metaFields);

var _userFields = require('../../fields/user-fields');

var _userFields2 = _interopRequireDefault(_userFields);

var _nestedFields = require('../../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake meta data\ntype CreatedBy {\n  ' + _userFields2.default + '\n}\n\ntype UpdatedBy {\n  ' + _userFields2.default + '\n}\n\ntype Meta {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _metaFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var metaQueries = exports.metaQueries = '\n  # meta takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Meta (locale: String, roles: [String]) : Meta\n  MetaList (length: Int!, locale: String, roles: [String]): [Meta]\n';