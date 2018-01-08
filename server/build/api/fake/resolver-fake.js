'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fake = exports.fakeQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fakeQueries = exports.fakeQueries = {
  Fake: function Fake(_, args, context) {
    return context.connectors.fake.generate(_extends({ args: args }, context));
  },
  FakeList: function FakeList(_, args, context) {
    return context.connectors.fake.generateN(_extends({ args: args }, context));
  }
};

var Fake = exports.Fake = _extends({}, _contextFakegql2.default);