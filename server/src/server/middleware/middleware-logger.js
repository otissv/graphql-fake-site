/*
* Application logger
*/


'use strict';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import winston from 'winston';

export default function logger (app) {

  // create a write stream (in append mode)
  var accessLogStream = fs.createWriteStream(path.join(__dirname, '../../../logs/access.log'), { flags: 'a' });

  // setup the logger
  app.use(morgan('combined', { stream: accessLogStream }));
  
  const env = app.get('env') === 'production' ? 'production' : 'development';

  const tsFormat = () => (new Date());
  
  const logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        timestamp: tsFormat,
        colorize: true,
      }),
      new (winston.transports.File)({
        filename: path.join(__dirname, '../../../logs/error.log'),
        timestamp: tsFormat
      })
    ]
  });

  app.locals.logger = function (log, level) {
    // const logLevel = level || env === 'production' ? 'info' : 'verbose';
    logger.log('info', log);
  };
};

