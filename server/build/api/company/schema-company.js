'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.businessQueries = undefined;

var _companyFields = require('../fields/company-fields');

var _companyFields2 = _interopRequireDefault(_companyFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake businesses\ntype Company {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _companyFields2.default + ',\n  ' + _nestedFields2.default + '\n}';
var businessQueries = exports.businessQueries = '\n  # company takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Company (locale: String): Company\n  CompanyList (length: Int!, locale: String): [Company]\n';