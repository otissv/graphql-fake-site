'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  connect: function connect(uri) {
    return _mongodb2.default.MongoClient.connect(uri, { native_parser: true });
  }
}; /*
   * MongoDB connection
   */

// const client = mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/test');