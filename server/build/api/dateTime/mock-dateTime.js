'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dateTimeMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dateTimeMock(_ref) {
  var _ref$timeFormat = _ref.timeFormat,
      timeFormat = _ref$timeFormat === undefined ? 'HH:mm:ss' : _ref$timeFormat,
      _ref$dataFormat = _ref.dataFormat,
      dataFormat = _ref$dataFormat === undefined ? 'YYYY-MM-DD' : _ref$dataFormat;

  return {
    unixTime: _casual2.default.unix_time,
    date: _casual2.default.date(dataFormat),
    time: _casual2.default.time(timeFormat),
    century: _casual2.default.century,
    amPm: _casual2.default.am_pm,
    dayOfYear: _casual2.default.day_of_year,
    dayOfMonth: _casual2.default.day_of_month,
    dayOfWeek: _casual2.default.day_of_week,
    weekday: _faker2.default.date.weekday(),
    month: _faker2.default.date.month(),
    monthNumber: _casual2.default.month_number,
    year: _casual2.default.year,
    timezone: _casual2.default.timezone,
    past: (0, _moment2.default)(_faker2.default.date.past()).toISOString(),
    future: (0, _moment2.default)(_faker2.default.date.future()).toISOString(),
    between: (0, _moment2.default)(_faker2.default.date.between()).toISOString(),
    recent: (0, _moment2.default)(_faker2.default.date.recent()).toISOString()
  };
};