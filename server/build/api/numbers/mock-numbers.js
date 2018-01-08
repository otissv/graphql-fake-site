'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numbersMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _helpersFakegql = require('../helpers-fakegql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function numbersMock(_ref) {
  var _ref$integerFrom = _ref.integerFrom,
      integerFrom = _ref$integerFrom === undefined ? -1000 : _ref$integerFrom,
      _ref$integerTo = _ref.integerTo,
      integerTo = _ref$integerTo === undefined ? 1000 : _ref$integerTo,
      _ref$doubleFrom = _ref.doubleFrom,
      doubleFrom = _ref$doubleFrom === undefined ? -1000 : _ref$doubleFrom,
      _ref$doubleTo = _ref.doubleTo,
      doubleTo = _ref$doubleTo === undefined ? 1000 : _ref$doubleTo,
      _ref$arrayOfDigits = _ref.arrayOfDigits,
      arrayOfDigits = _ref$arrayOfDigits === undefined ? 7 : _ref$arrayOfDigits,
      _ref$arrayOfIntegers = _ref.arrayOfIntegers,
      arrayOfIntegers = _ref$arrayOfIntegers === undefined ? 7 : _ref$arrayOfIntegers,
      _ref$arrayOfDoubles = _ref.arrayOfDoubles,
      arrayOfDoubles = _ref$arrayOfDoubles === undefined ? 7 : _ref$arrayOfDoubles,
      _ref$randomFrom = _ref.randomFrom,
      randomFrom = _ref$randomFrom === undefined ? 0 : _ref$randomFrom,
      _ref$randomTo = _ref.randomTo,
      randomTo = _ref$randomTo === undefined ? 1000 : _ref$randomTo;

  return {
    random: _faker2.default.random.number,
    integer: _casual2.default.integer(integerFrom, integerTo),
    double: _casual2.default.double(doubleFrom, doubleTo),
    arrayOfDigits: _casual2.default.array_of_digits(arrayOfDigits),
    arrayOfIntegers: _casual2.default.array_of_integers(arrayOfIntegers),
    arrayOfDoubles: _casual2.default.array_of_doubles(arrayOfDoubles),
    randomBetween: (0, _helpersFakegql.randNumber)(randomFrom, randomTo)
  };
};