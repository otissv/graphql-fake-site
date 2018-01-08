'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageQueries = undefined;

var _messageFields = require('../../fields/message-fields');

var _messageFields2 = _interopRequireDefault(_messageFields);

var _nestedFields = require('../../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake messages\ntype Message {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _messageFields2.default + ',\n  ' + _nestedFields2.default + '\n}';
var messageQueries = exports.messageQueries = '\n  # message takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Message (locale: String) : Message\n  MessageList (length: Int!, locale: String): [Message]\n';