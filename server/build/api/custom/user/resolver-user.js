'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.userQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userQueries = exports.userQueries = {
  User: function User(_, args, context) {
    return context.connectors.user.generate(_extends({ args: args }, context));
  },
  UserList: function UserList(_, args, context) {
    return context.connectors.user.generateN(_extends({ args: args }, context));
  }
};

var User = exports.User = _extends({}, _contextFakegql2.default);