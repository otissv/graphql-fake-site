'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transactionMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transactionMock(_ref) {
  var cardVendor = _ref.cardVendor;

  return {
    _id: _casual2.default.uuid,
    currency: _casual2.default.currency,
    currencyCode: _casual2.default.currency_code,
    currencySymbol: _casual2.default.currency_symbol,
    currencyName: _casual2.default.currency_name,
    amount: _faker2.default.finance.amount(),
    company: _faker2.default.company.companyName(),
    date: (0, _moment2.default)(_faker2.default.date.past()).toISOString(),
    account: _faker2.default.finance.account(),
    name: _faker2.default.finance.accountName(),
    type: _faker2.default.finance.transactionType()
  };
};