'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Finance = exports.financeQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var financeQueries = exports.financeQueries = {
  Finance: function Finance(_, args, context) {
    return context.connectors.finance.generate(_extends({ args: args }, context));
  },
  FinanceList: function FinanceList(_, args, context) {
    return context.connectors.finance.generateN(_extends({ args: args }, context));
  }
};

var Finance = exports.Finance = _extends({}, _contextFakegql2.default);