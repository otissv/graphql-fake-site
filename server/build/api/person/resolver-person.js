'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = exports.personQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var personQueries = exports.personQueries = {
  Person: function Person(_, args, context) {
    return context.connectors.person.generate(_extends({ args: args }, context));
  },
  PersonList: function PersonList(_, args, context) {
    return context.connectors.person.generateN(_extends({ args: args }, context));
  }
};

var Person = exports.Person = _extends({}, _contextFakegql2.default);