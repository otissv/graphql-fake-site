'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = databaseMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function databaseMock() {
  return {
    column: _faker2.default.database.column(),
    type: _faker2.default.database.type(),
    collation: _faker2.default.database.collation(),
    engine: _faker2.default.database.engine()
  };
};