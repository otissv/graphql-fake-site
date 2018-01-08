/*
* Application environments config
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.env = env;
exports.default = environment;

var _developmentEnv = require('./development-env.js');

var _developmentEnv2 = _interopRequireDefault(_developmentEnv);

var _productionEnv = require('./production-env.js');

var _productionEnv2 = _interopRequireDefault(_productionEnv);

var _getEnv = require('get-env');

var _getEnv2 = _interopRequireDefault(_getEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENV = (0, _getEnv2.default)();

function env() {
  switch (ENV) {
    case 'dev' || 'development':
      return _developmentEnv2.default;
    case 'prod' || 'production':
      return _productionEnv2.default;
    default:
      throw new Error('Unknown exception Environment:');
  }
};

function environment(app) {
  var config = env();
  /*
  *Application variables
  */
  app.set('baseURL', config.baseURL);
  app.set('shuttingDown', false);
  app.locals = _extends({}, app.locals, config);
};