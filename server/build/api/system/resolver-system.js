'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.System = exports.systemQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var systemQueries = exports.systemQueries = {
  System: function System(_, args, context) {
    return context.connectors.system.generate(_extends({ args: args }, context));
  },
  SystemList: function SystemList(_, args, context) {
    return context.connectors.system.generateN(_extends({ args: args }, context));
  }
};

var System = exports.System = _extends({}, _contextFakegql2.default);