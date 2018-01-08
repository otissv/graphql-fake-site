'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = cardTransactionMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cardTransactionMock(_ref) {
  var cardVendor = _ref.cardVendor;

  return _extends({
    currencyCode: _faker2.default.finance.currencyCode(),
    currencySymbol: _faker2.default.finance.currencySymbol(),
    currencyName: _faker2.default.finance.currencyName(),
    cardType: _casual2.default.card_type,
    cardNumber: _casual2.default.card_number(cardVendor),
    cardExp: _casual2.default.card_exp,
    cardData: _casual2.default.card_data
  }, _faker2.default.helpers.createCard().accountHistory[0]);
};