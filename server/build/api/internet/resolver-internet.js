'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Internet = exports.internetQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var internetQueries = exports.internetQueries = {
  Internet: function Internet(_, args, context) {
    return context.connectors.internet.generate(_extends({ args: args }, context));
  },
  InternetList: function InternetList(_, args, context) {
    return context.connectors.internet.generateN(_extends({ args: args }, context));
  }
};

var Internet = exports.Internet = _extends({}, _contextFakegql2.default);