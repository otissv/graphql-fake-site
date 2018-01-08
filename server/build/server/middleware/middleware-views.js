'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = views;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hbs = _expressHandlebars2.default.create({
  defaultLayout: 'main',
  partialsDir: ['server/views']
});

function views(app) {
  app.set('views', _path2.default.join(__dirname, '../views'));
  app.engine('.hbs', (0, _expressHandlebars2.default)({
    extname: '.hbs',
    layoutsDir: _path2.default.join(__dirname, './views')
  }));
  app.set('view engine', '.hbs');
};