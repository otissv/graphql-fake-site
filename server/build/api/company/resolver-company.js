'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Company = exports.businessQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var businessQueries = exports.businessQueries = {
  Company: function Company(_, args, context) {
    return context.connectors.company.generate(_extends({ args: args }, context));
  },
  CompanyList: function CompanyList(_, args, context) {
    return context.connectors.company.generateN(_extends({ args: args }, context));
  }
};

var Company = exports.Company = _extends({}, _contextFakegql2.default);