/*
* Application is shutting down
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shutDown;
function shutDown(app) {
  app.use(function (req, res, next) {
    if (app.get('shuttingDown')) {
      return;
    }
    next();
  });
}