/*
* Application routes
*/

'use strict';
import casualRoutes from '../api/routes-fakegql';

export default function routes (app, context) {
  const domain = app.locals.services.domain;
  
  app.route('/').get((req, res) => {
    return res.render('index', { domain, title: 'Loop App' });
  });

  casualRoutes(app, context);
}
