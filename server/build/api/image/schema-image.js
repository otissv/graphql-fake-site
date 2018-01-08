'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageQueries = undefined;

var _imageFields = require('../fields/image-fields');

var _imageFields2 = _interopRequireDefault(_imageFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n# Generates a list of fake images\ntype Image {\n  #=> \'2f4dc6ba-bd25-4e66-b369-43a13e0cf150\' \n  _id:            String,\n  \n  ' + _imageFields2.default + '\n  ' + _nestedFields2.default + '\n}';
var imageQueries = exports.imageQueries = '\n  # image takes an optional length parameter as an argument. If length is defined 1 item is returned\n  Image (locale: String): Image\n  ImageList (length: Int!, locale: String): [Image]\n';