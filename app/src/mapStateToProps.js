// Core
import app, { APP_INITIAL_STATE } from './core/app/state-app';
import local, { LOCAL_INITIAL_STATE } from './core/local/state-local';
import graphiql, { GRAPHIQL_INITIAL_STATE } from './core/graphiql/state-graphql';

// Modules


export const initialState = {
  // Core
  ...APP_INITIAL_STATE,
  ...GRAPHIQL_INITIAL_STATE,
  ...LOCAL_INITIAL_STATE,

  // Modules
};


export default function mapStateToProps (state) {
  return {
    // Core
    ...app(state),
    ...local(state),
    ...graphiql(state),

    // Modules
  };
}
