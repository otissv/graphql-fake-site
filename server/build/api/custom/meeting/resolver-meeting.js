'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meeting = exports.meetingQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meetingQueries = exports.meetingQueries = {
  Meeting: function Meeting(_, args, context) {
    return context.connectors.meeting.generate(_extends({ args: args }, context));
  },
  MeetingList: function MeetingList(_, args, context) {
    return context.connectors.meeting.generateN(_extends({ args: args }, context));
  }
};

var Meeting = exports.Meeting = _extends({}, _contextFakegql2.default);