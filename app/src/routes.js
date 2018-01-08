
// Core
import LayoutView from './core/app/views/layout-view-app';
import graphiql from './core/graphiql/route-graphiql';

// Modules

const routes = (store) => {
  return {
    path: '/',
    component: LayoutView,
    indexRoute: graphiql
  };
};

export default routes;
