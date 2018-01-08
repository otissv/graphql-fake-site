'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app, express) {
  (0, _environment2.default)(app);
  (0, _middlewareIndex2.default)(app, express);
  (0, _routes2.default)(app, {
    databases: {
      // redis: databases.redis.connect(app.locals.redis)
    },
    locals: app.locals
  });
};

var _databases = require('./databases');

var _databases2 = _interopRequireDefault(_databases);

var _environment = require('./env/environment');

var _environment2 = _interopRequireDefault(_environment);

var _middlewareIndex = require('./middleware/middleware-index');

var _middlewareIndex2 = _interopRequireDefault(_middlewareIndex);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;