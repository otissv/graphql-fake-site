'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meta = exports.metaQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var metaQueries = exports.metaQueries = {
  Meta: function Meta(_, args, context) {
    return context.connectors.meta.generate(_extends({ args: args }, context));
  },
  MetaList: function MetaList(_, args, context) {
    return context.connectors.meta.generateN(_extends({ args: args }, context));
  }
};

var Meta = exports.Meta = _extends({}, _contextFakegql2.default);