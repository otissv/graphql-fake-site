/*
* Application routes
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _routesFakegql = require('../api/routes-fakegql');

var _routesFakegql2 = _interopRequireDefault(_routesFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app, context) {
  var domain = app.locals.services.domain;

  app.route('*').get(function (req, res) {
    return res.render('index', { domain: domain, title: 'Loop App' });
  });

  (0, _routesFakegql2.default)(app, context);
}