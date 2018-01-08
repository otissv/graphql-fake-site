import { combineReducers } from 'redux';

// Core
import appReducer from './core/app/reducer-app';
import localReducer from './core/local/reducer-local';
import graphiqlReducer from './core/graphiql/reducer-graphiql';

// Modules


const rootReducer = combineReducers({
  // Core
  app:        appReducer,
  local:      localReducer,
  graphiql:   graphiqlReducer

  // Modules
});

export default rootReducer;
