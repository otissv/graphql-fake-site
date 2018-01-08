'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.limit = limit;
exports.promise = promise;
exports.resolve = resolve;
exports.generateMethod = generateMethod;
exports.generateNMethod = generateNMethod;
exports.randNumber = randNumber;
exports.randomDate = randomDate;
exports.getDates = getDates;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function limit(count) {
  return count > 50 ? 50 : count;
}

function promise(fn) {
  return new Promise(function (resolve, reject) {
    return fn(resolve, reject);
  });
};

function resolve(_ref) {
  var connector = _ref.connector,
      context = _ref.context,
      method = _ref.method,
      query = _ref.query;

  return context.connectors[connector][method](_extends({ args: query.createdBy }, context));
}

function generateMethod(_ref2) {
  var args = _ref2.args,
      mock = _ref2.mock,
      props = _ref2.props;

  return promise(function (resolve, reject) {
    return resolve(_extends({}, mock(_extends({}, args)), props));
  });
}

function generateNMethod(_ref3) {
  var args = _ref3.args,
      mock = _ref3.mock,
      props = _ref3.props;

  return promise(function (resolve, reject) {
    var length = limit(args.length);
    var list = [];

    for (var i = 0; i < length; i++) {
      list.push(_extends({}, mock(_extends({}, args)), props));
    }

    return resolve(list);
  });
}

function randNumber(min, max, interval) {
  if (typeof interval === 'undefined') interval = 1;
  var r = Math.floor(Math.random() * (max - min + interval) / interval);
  return r * interval + min;
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getDates() {
  var date = new Date();

  var startDate = (0, _moment2.default)({
    years: date.getFullYear(),
    months: date.getMonth(),
    date: randNumber(1, 28),
    hours: randNumber(0, 23),
    minutes: randNumber(1, 59)
  });

  var endDate = (0, _moment2.default)({
    years: startDate.year(),
    months: startDate.month(),
    date: randNumber(1, 28),
    hours: randNumber(0, 23),
    minutes: randNumber(1, 59)
  });

  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString()
  };
}