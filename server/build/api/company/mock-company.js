'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = businessMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function businessMock() {
  return {
    companyName: _faker2.default.company.companyName(),
    companySuffix: _faker2.default.company.companySuffix(),
    catchPhrase: _faker2.default.company.catchPhrase(),
    suffixes: _faker2.default.company.suffixes(),
    bs: _faker2.default.company.bs(),
    catchPhraseAdjective: _faker2.default.company.catchPhraseAdjective(),
    catchPhraseDescriptor: _faker2.default.company.catchPhraseDescriptor(),
    catchPhraseNoun: _faker2.default.company.catchPhraseNoun(),
    bsAdjective: _faker2.default.company.bsAdjective(),
    bsBuzz: _faker2.default.company.bsBuzz(),
    bsNoun: _faker2.default.company.bsNoun()
  };
};