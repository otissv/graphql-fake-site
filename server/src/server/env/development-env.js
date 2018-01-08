/*
* Development environment config
*/

'use strict';

import services from '../../../services';

const { domain, port, portHttps } = services.development.fake;

export default {
  port,
  portHttps,
  baseURL: `${domain}:${portHttps}`,
  title  : 'Casual Faker',
  mongodb: {
    uri : 'mongodb://127.0.0.1:27017/test',
    opts: {
      server: {
        socketOptions: { keepAlive: 1 }
      }
    }
  },
  redis: {
    uri : '127.0.0.1',
    port: 6379
  },
  rethinkdb: {
    port: 28015,
    host: 'localhost',
    db  : 'test'
  },
  services: services.development
};
