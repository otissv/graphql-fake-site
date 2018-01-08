'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = systemMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function systemMock() {
  return {
    mimeType: _faker2.default.system.mimeType(),
    fileExtension: _faker2.default.system.fileExt(),
    uuid: _faker2.default.random.uuid(),
    id: _faker2.default.random.uuid(),
    _id: _faker2.default.random.uuid(),
    fileName: _faker2.default.system.fileName(),
    commonFileName: _faker2.default.system.commonFileName(),
    commonFileType: _faker2.default.system.commonFileType(),
    commonFileExtension: _faker2.default.system.commonFileExt(),
    directoryPath: _faker2.default.system.directoryPath(),
    filePath: _faker2.default.system.filePath(),
    semver: _faker2.default.system.semver()
  };
};