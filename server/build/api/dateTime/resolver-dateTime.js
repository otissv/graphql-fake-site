'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTime = exports.dateTimeQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateTimeQueries = exports.dateTimeQueries = {
  DateTime: function DateTime(_, args, context) {
    return context.connectors.dateTime.generate(_extends({ args: args }, context));
  },
  DateTimeList: function DateTimeList(_, args, context) {
    return context.connectors.dateTime.generateN(_extends({ args: args }, context));
  }
};

var DateTime = exports.DateTime = _extends({}, _contextFakegql2.default);