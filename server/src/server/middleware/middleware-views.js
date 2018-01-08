'use strict';

import path from 'path';
import exphbs from 'express-handlebars';

const hbs = exphbs.create({
  defaultLayout: 'main',
  partialsDir: ['server/views']
});

export default function views (app) {
  app.set('views', path.join(__dirname, '../views'));
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, './views')
  }));
  app.set('view engine', '.hbs');

};
