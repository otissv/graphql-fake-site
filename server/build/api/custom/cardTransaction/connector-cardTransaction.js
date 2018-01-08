'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mockCardTransaction = require('./mock-cardTransaction');

var _mockCardTransaction2 = _interopRequireDefault(_mockCardTransaction);

var _helpersFakegql = require('../../helpers-fakegql.js');

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mock = _mockCardTransaction2.default;

var CardTransaction = function () {
  function CardTransaction() {
    _classCallCheck(this, CardTransaction);
  }

  _createClass(CardTransaction, [{
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

  return CardTransaction;
}();

;

exports.default = new CardTransaction();