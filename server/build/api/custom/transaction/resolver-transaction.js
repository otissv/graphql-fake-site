'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transaction = exports.transactionQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transactionQueries = exports.transactionQueries = {
  Transaction: function Transaction(_, args, context) {
    return context.connectors.transaction.generate(_extends({ args: args }, context));
  },
  TransactionList: function TransactionList(_, args, context) {
    return context.connectors.transaction.generateN(_extends({ args: args }, context));
  }
};

var Transaction = exports.Transaction = _extends({}, _contextFakegql2.default);