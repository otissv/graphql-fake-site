import { introspectionQuery } from 'graphql/utilities/introspectionQuery'; 
import { query } from '../helpers/async-query.js';
import { API_ROUTE } from '../constants/routes-constants';
import { localAuth } from '../local/services-local';
import { 
  GET_GRAPHQL_SCHEMA,
  SET_GRAPHQL_SCHEMA,
  SET_THEME
} from './constant-graphiql';


export function getGraphqlSchema () {
  const {
    id,
    token
  } = localAuth();

  const request = query({
    url:    API_ROUTE,
    auth:   { id, token },
    actions: ['__schema'],
    query:  introspectionQuery
  });

  return {
    type: GET_GRAPHQL_SCHEMA,
    payload: request.then(response => response)
  };
}


export function setGraphqlSchema (schema) {
  return {
    type: SET_GRAPHQL_SCHEMA,
    payload: schema
  };
}

export function setTheme (theme) {
  return {
    type: SET_THEME,
    payload: theme
  };
}

