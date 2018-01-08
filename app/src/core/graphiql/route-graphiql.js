export const GRAPHIQL_ROUTE = '/graphiql';


export default [
  {
    // path: GRAPHIQL_ROUTE,
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./views/view-graphiql').default);
      });
    }
  }
];

