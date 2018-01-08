'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardTransaction = exports.cardTransactionQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardTransactionQueries = exports.cardTransactionQueries = {
  CardTransaction: function CardTransaction(_, args, context) {
    return context.connectors.cardTransaction.generate(_extends({ args: args }, context));
  },
  CardTransactionList: function CardTransactionList(_, args, context) {
    return context.connectors.cardTransaction.generateN(_extends({ args: args }, context));
  }
};

var CardTransaction = exports.CardTransaction = _extends({}, _contextFakegql2.default);