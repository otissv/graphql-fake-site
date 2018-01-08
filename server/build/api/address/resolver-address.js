'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Address = exports.addressQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addressQueries = exports.addressQueries = {
  Address: function Address(_, args, context) {
    return context.connectors.address.generate(_extends({ args: args }, context));
  },
  AddressList: function AddressList(_, args, context) {
    return context.connectors.address.generateN(_extends({ args: args }, context));
  }
};

var Address = exports.Address = _extends({}, _contextFakegql2.default);