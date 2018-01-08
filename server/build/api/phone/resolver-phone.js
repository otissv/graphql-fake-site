'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Phone = exports.phoneQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var phoneQueries = exports.phoneQueries = {
  Phone: function Phone(_, args, context) {
    return context.connectors.phone.generate(_extends({ args: args }, context));
  },
  PhoneList: function PhoneList(_, args, context) {
    return context.connectors.phone.generateN(_extends({ args: args }, context));
  }
};

var Phone = exports.Phone = _extends({}, _contextFakegql2.default);