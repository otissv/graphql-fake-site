'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = colorMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function colorMock() {
  return {
    colorName: _casual2.default.color_name,
    safeColorName: _casual2.default.safe_color_name,
    rgbHex: _casual2.default.rgb_hex,
    rgbArray: _casual2.default.rgb_array
  };
};