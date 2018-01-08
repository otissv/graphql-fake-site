#!/usr/bin/env node


/*
* Application Sever
*/

'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var app = (0, _express2.default)();
var os = require('os');
var networkInterfaces = os.networkInterfaces();

(0, _main2.default)(app, _express2.default);

app.set('port', process.env.PORT || app.locals.port);

var externalAddress;

if (networkInterfaces.en0 === true) {
  externalAddress = networkInterfaces.en0[0].address;
} else if (networkInterfaces.wlp4s0) {
  externalAddress = networkInterfaces.wlp4s0[0].address;
}

var server = app.listen(app.get('port'), function () {
  var port = server.address().port;

  process.stdout.write('\n  Express server started in ' + app.get('env') + ' mode.\n  Local address : http://localhost:' + port + '\n  ' + (externalAddress ? 'External address ' + 'http://' + externalAddress + ':' + port : '') + '\n  ');
});