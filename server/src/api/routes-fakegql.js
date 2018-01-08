/*
* Application routes
*/

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import connectors from './connectors-fakegql';
import resolvers from './resolvers-fakegql';
import schema from './schemas-fakegql';

const logger = { 
  log: (e) => console.log(e)
};


export default function authRoutes (app, context) {
  app.use('/graphql', graphqlExpress(req => {
    return {
      schema: makeExecutableSchema({
        typeDefs: schema,
        resolvers: resolvers,
        logger
      }),
      context: {
        ...context,
        connectors,
        req
      }
    };
  }));

  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}
