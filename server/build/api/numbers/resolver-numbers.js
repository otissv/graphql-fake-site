'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Numbers = exports.numbersQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numbersQueries = exports.numbersQueries = {
  Numbers: function Numbers(_, args, context) {
    return context.connectors.numbers.generate(_extends({ args: args }, context));
  },
  NumbersList: function NumbersList(_, args, context) {
    return context.connectors.numbers.generateN(_extends({ args: args }, context));
  }
};

var Numbers = exports.Numbers = _extends({}, _contextFakegql2.default);