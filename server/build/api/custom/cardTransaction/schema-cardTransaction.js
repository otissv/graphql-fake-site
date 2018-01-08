'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardTransactionQueries = undefined;

var _transactionFields = require('../../fields/transaction-fields');

var _transactionFields2 = _interopRequireDefault(_transactionFields);

var _cardFields = require('../../fields/card-fields');

var _cardFields2 = _interopRequireDefault(_cardFields);

var _nestedFields = require('../../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake cardTransactions\ntype CardTransaction {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id: String,\n  \n  ' + _transactionFields2.default + '\n  ' + _cardFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var cardTransactionQueries = exports.cardTransactionQueries = '\n  # cardTransaction takes an optional length parameter as an argument. If length is defined 1 item is returned\n  CardTransaction (locale: String): CardTransaction\n  CardTransactionList (length: Int!, locale: String): [CardTransaction]\n';