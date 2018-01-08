'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Misc = exports.miscQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var miscQueries = exports.miscQueries = {
  Misc: function Misc(_, args, context) {
    return context.connectors.misc.generate(_extends({ args: args }, context));
  },
  MiscList: function MiscList(_, args, context) {
    return context.connectors.misc.generateN(_extends({ args: args }, context));
  }
};

var Misc = exports.Misc = _extends({}, _contextFakegql2.default);