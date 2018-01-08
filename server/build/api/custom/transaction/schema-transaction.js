'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transactionQueries = undefined;

var _transactionFields = require('../../fields/transaction-fields');

var _transactionFields2 = _interopRequireDefault(_transactionFields);

var _nestedFields = require('../../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake transactions\ntype Transaction {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id: String,\n  \n  ' + _transactionFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var transactionQueries = exports.transactionQueries = '\n  # transaction takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Transaction (locale: String): Transaction\n  TransactionList (length: Int!, locale: String): [Transaction]\n';