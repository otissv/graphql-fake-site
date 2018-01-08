'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = internetMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function internetMock() {
  return {
    ip: _faker2.default.internet.ip(),
    domainName: _faker2.default.internet.domainName(),
    url: _faker2.default.internet.url(),
    userAgent: _faker2.default.internet.userAgent(),
    exampleEmail: _faker2.default.internet.exampleEmail(),
    protocol: _faker2.default.internet.protocol(),
    domainSuffix: _faker2.default.internet.domainSuffix(),
    domainWord: _faker2.default.internet.domainWord(),
    ipv6: _faker2.default.internet.ipv6(),
    mac: _faker2.default.internet.mac()
  };
};