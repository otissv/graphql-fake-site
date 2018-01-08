'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = exports.colorQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorQueries = exports.colorQueries = {
  Color: function Color(_, args, context) {
    return context.connectors.color.generate(_extends({ args: args }, context));
  },
  ColorList: function ColorList(_, args, context) {
    return context.connectors.color.generateN(_extends({ args: args }, context));
  }
};

var Color = exports.Color = _extends({}, _contextFakegql2.default);