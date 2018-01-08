'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.financeQueries = undefined;

var _financeFields = require('../fields/finance-fields');

var _financeFields2 = _interopRequireDefault(_financeFields);

var _currencyFields = require('../fields/currency-fields');

var _currencyFields2 = _interopRequireDefault(_currencyFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake finances\ntype Finance {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _financeFields2.default + '\n  ' + _currencyFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var financeQueries = exports.financeQueries = '\n  # finance takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Finance (length: Int): Finance\n  FinanceList (length: Int!, locale: String): [Finance]\n';