'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cardMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cardMock(_ref) {
  var cardVendor = _ref.cardVendor;

  return {
    cardType: _casual2.default.card_type,
    cardNumber: _casual2.default.card_number(cardVendor),
    cardExp: _casual2.default.card_exp,
    cardData: _casual2.default.card_data
  };
};