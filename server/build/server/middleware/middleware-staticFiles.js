/*
* Application static files
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = staticFiles;

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function staticFiles(app, express) {
  app.use((0, _compression2.default)({
    filter: function filter(req, res) {
      return (/json|text|javascript|css/.test(res.getHeader('Content-Type'))
      );
    },
    level: 9
  }));

  // Static files locations
  app.use(express.static(_path2.default.join(__dirname, '../../public/')));
};