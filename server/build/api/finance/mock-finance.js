'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = financeMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function financeMock() {
  return {
    currency: _casual2.default.currency,
    currencyCode: _faker2.default.finance.currencyCode(),
    currencySymbol: _faker2.default.finance.currencySymbol(),
    currencyName: _faker2.default.finance.account(),
    account: _faker2.default.finance.account(),
    accountName: _faker2.default.finance.accountName(),
    mask: _faker2.default.finance.mask(),
    amount: _faker2.default.finance.amount(),
    transactionType: _faker2.default.finance.transactionType(),
    bitcoinAddress: _faker2.default.finance.bitcoinAddress(),
    iban: _faker2.default.finance.iban(),
    bic: _faker2.default.finance.bic()
  };
};