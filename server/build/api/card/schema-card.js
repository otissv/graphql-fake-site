'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardQueries = undefined;

var _cardFields = require('../fields/card-fields');

var _cardFields2 = _interopRequireDefault(_cardFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake cards\ntype Card {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _cardFields2.default + ',\n  ' + _nestedFields2.default + '\n}';
var cardQueries = exports.cardQueries = '\n  # card takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Card (locale: String): Card\n  CardList (length: Int!, locale: String): [Card]\n';