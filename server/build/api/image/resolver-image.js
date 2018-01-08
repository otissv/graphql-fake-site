'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.imageQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contextFakegql = require('../context-fakegql');

var _contextFakegql2 = _interopRequireDefault(_contextFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imageQueries = exports.imageQueries = {
  Image: function Image(_, args, context) {
    return context.connectors.image.generate(_extends({ args: args }, context));
  },
  ImageList: function ImageList(_, args, context) {
    return context.connectors.image.generateN(_extends({ args: args }, context));
  }
};

var Image = exports.Image = _extends({}, _contextFakegql2.default);