'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Database = exports.databaseQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var databaseQueries = exports.databaseQueries = {
  Database: function Database(_, args, context) {
    return context.connectors.database.generate(_extends({ args: args }, context));
  },
  DatabaseList: function DatabaseList(_, args, context) {
    return context.connectors.database.generateN(_extends({ args: args }, context));
  }
};

var Database = exports.Database = _extends({}, _contextFakegql2.default);