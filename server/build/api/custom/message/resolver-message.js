'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = exports.messageQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageQueries = exports.messageQueries = {
  Message: function Message(_, args, context) {
    return context.connectors.message.generate(_extends({ args: args }, context));
  },
  MessageList: function MessageList(_, args, context) {
    return context.connectors.message.generateN(_extends({ args: args }, context));
  }
};

var Message = exports.Message = _extends({}, _contextFakegql2.default);