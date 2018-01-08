// Core
import * as app from './core/app/action-app';
import * as local from './core/local/action-local';
import * as graphical from './core/graphiql/action-graphiql';

// Modules


export default {
  // Core
  ...app,
  ...local,
  ...graphical,

  // Modules
};
