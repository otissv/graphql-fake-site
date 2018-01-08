import {
  SET_GRAPHQL_SCHEMA,
  SET_THEME
} from './constant-graphiql';

import { GRAPHIQL_INITIAL_STATE } from './state-graphql';


export default function companyReducer (state = GRAPHIQL_INITIAL_STATE, action) {
  switch (action.type) {
    case SET_GRAPHQL_SCHEMA:
      return { ...state, introspection : action.payload };

    case SET_THEME:
      return { ...state, gqlTheme : action.payload };

    default:
      return state;
  }
}
