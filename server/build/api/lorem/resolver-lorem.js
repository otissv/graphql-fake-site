'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lorem = exports.loremQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loremQueries = exports.loremQueries = {
  Lorem: function Lorem(_, args, context) {
    return context.connectors.lorem.generate(_extends({ args: args }, context));
  },
  LoremList: function LoremList(_, args, context) {
    return context.connectors.lorem.generateN(_extends({ args: args }, context));
  }
};

var Lorem = exports.Lorem = _extends({}, _contextFakegql2.default);