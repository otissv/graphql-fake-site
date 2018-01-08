/*
* redis connection
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connection = connection;

var _promiseRedis = require('promise-redis');

var _promiseRedis2 = _interopRequireDefault(_promiseRedis);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redis = (0, _promiseRedis2.default)(function (resolver) {
  return new _bluebird2.default(resolver);
});

function connection(_ref) {
  var port = _ref.port,
      uri = _ref.uri;


  var client = void 0;
  client = redis.createClient({ port: port, uri: uri });

  // Event handlers
  client.on('connect', function () {
    console.log('Redis connected to ' + uri + ':' + port);
  });

  client.on('end', function () {
    console.log('Redis disconnected');
    client.quit();
  });

  client.on('error', function (err) {
    console.log('Error ' + err);
  });

  // Return instance of redis client
  return client;
};

exports.default = {
  connect: function connect(options) {
    return connection(options);
  }
};