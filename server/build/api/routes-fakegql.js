'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                  * Application routes
                                                                                                                                                                                                                                                                  */

exports.default = authRoutes;

var _graphqlServerExpress = require('graphql-server-express');

var _graphqlTools = require('graphql-tools');

var _connectorsFakegql = require('./connectors-fakegql');

var _connectorsFakegql2 = _interopRequireDefault(_connectorsFakegql);

var _resolversFakegql = require('./resolvers-fakegql');

var _resolversFakegql2 = _interopRequireDefault(_resolversFakegql);

var _schemasFakegql = require('./schemas-fakegql');

var _schemasFakegql2 = _interopRequireDefault(_schemasFakegql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = {
  log: function log(e) {
    return console.log(e);
  }
};

function authRoutes(app, context) {
  app.use('/graphql', (0, _graphqlServerExpress.graphqlExpress)(function (req) {
    return {
      schema: (0, _graphqlTools.makeExecutableSchema)({
        typeDefs: _schemasFakegql2.default,
        resolvers: _resolversFakegql2.default,
        logger: logger
      }),
      context: _extends({}, context, {
        connectors: _connectorsFakegql2.default,
        req: req
      })
    };
  }));

  app.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }));
}