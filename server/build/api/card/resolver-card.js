'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = exports.cardQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardQueries = exports.cardQueries = {
  Card: function Card(_, args, context) {
    return context.connectors.card.generate(_extends({ args: args }, context));
  },
  CardList: function CardList(_, args, context) {
    return context.connectors.card.generateN(_extends({ args: args }, context));
  }
};

var Card = exports.Card = _extends({}, _contextFakegql2.default);