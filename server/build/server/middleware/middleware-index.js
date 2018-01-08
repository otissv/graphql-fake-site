'use strict';
/*
* Application middleware
 */

'use strcit';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = middleware;

var _middlewareShuttingDown = require('../middleware/middleware-shuttingDown');

var _middlewareShuttingDown2 = _interopRequireDefault(_middlewareShuttingDown);

var _middlewareLogger = require('../middleware/middleware-logger');

var _middlewareLogger2 = _interopRequireDefault(_middlewareLogger);

var _middlewareBody = require('../middleware/middleware-body');

var _middlewareBody2 = _interopRequireDefault(_middlewareBody);

var _middlewareStaticFiles = require('../middleware/middleware-staticFiles');

var _middlewareStaticFiles2 = _interopRequireDefault(_middlewareStaticFiles);

var _middlewareSecurity = require('../middleware/middleware-security');

var _middlewareSecurity2 = _interopRequireDefault(_middlewareSecurity);

var _middlewareViews = require('../middleware/middleware-views');

var _middlewareViews2 = _interopRequireDefault(_middlewareViews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import session from '../backend/middleware/middleware-session';
function middleware(app, express) {
  (0, _middlewareShuttingDown2.default)(app);
  (0, _middlewareLogger2.default)(app);
  (0, _middlewareBody2.default)(app);
  (0, _middlewareStaticFiles2.default)(app, express);
  // session(app, mongodb.instance());
  (0, _middlewareSecurity2.default)(app);
  (0, _middlewareViews2.default)(app);
};