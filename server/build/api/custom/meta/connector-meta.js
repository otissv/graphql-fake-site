'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mockMeta = require('./mock-meta');

var _mockMeta2 = _interopRequireDefault(_mockMeta);

var _helpersFakegql = require('../../helpers-fakegql.js');

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mock = _mockMeta2.default;

var Meta = function () {
  function Meta() {
    _classCallCheck(this, Meta);
  }

  _createClass(Meta, [{
    key: 'generate',
    value: function generate(_ref) {
      var args = _ref.args;

      return (0, _helpersFakegql.generateMethod)({
        args: args,
        mock: mock,
        props: { _id: _faker2.default.random.uuid() }
      });
    }
  }, {
    key: 'generateN',
    value: function generateN(_ref2) {
      var args = _ref2.args;

      return (0, _helpersFakegql.generateNMethod)({
        args: args,
        mock: mock,
        props: { _id: _faker2.default.random.uuid() }
      });
    }
  }]);

  return Meta;
}();

;

exports.default = new Meta();