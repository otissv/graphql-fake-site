/*
* Production environment config
* */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _services = require('../../../services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _services$production$ = _services2.default.production.fake,
    domain = _services$production$.domain,
    port = _services$production$.port,
    portHttps = _services$production$.portHttps;
exports.default = {
  port: port,
  portHttps: portHttps,
  baseURL: domain + ':' + portHttps,
  title: 'Casual GraphiQL',
  mongodb: {
    uri: 'mongodb://127.0.0.1:27017/test',
    opts: {
      server: {
        socketOptions: { keepAlive: 1 }
      }
    }
  },
  redis: {
    uri: '127.0.0.1',
    port: 6379
  },
  rethinkdb: {
    port: 28015,
    host: 'localhost',
    db: 'test'
  },
  services: _services2.default.production
};