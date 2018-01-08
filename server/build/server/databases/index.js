/*
* Database connections
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongodb = require('./mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _redis = require('./redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var databases = {
  mongodb: _mongodb2.default,
  redis: _redis2.default
};

exports.default = databases;