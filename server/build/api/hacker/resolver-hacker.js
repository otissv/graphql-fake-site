'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hacker = exports.hackerQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hackerQueries = exports.hackerQueries = {
  Hacker: function Hacker(_, args, context) {
    return context.connectors.hacker.generate(_extends({ args: args }, context));
  },
  HackerList: function HackerList(_, args, context) {
    return context.connectors.hacker.generateN(_extends({ args: args }, context));
  }
};

var Hacker = exports.Hacker = _extends({}, _contextFakegql2.default);