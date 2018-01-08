'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = commerceMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function commerceMock() {
  return {
    department: _faker2.default.commerce.department(),
    productName: _faker2.default.commerce.productName(),
    price: _faker2.default.commerce.price(),
    productAdjective: _faker2.default.commerce.productAdjective(),
    productMaterial: _faker2.default.commerce.productMaterial(),
    product: _faker2.default.commerce.product()
  };
};