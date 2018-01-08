'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Commerce = exports.commerceQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commerceQueries = exports.commerceQueries = {
  Commerce: function Commerce(_, args, context) {
    return context.connectors.commerce.generate(_extends({ args: args }, context));
  },
  CommerceList: function CommerceList(_, args, context) {
    return context.connectors.commerce.generateN(_extends({ args: args }, context));
  }
};

var Commerce = exports.Commerce = _extends({}, _contextFakegql2.default);