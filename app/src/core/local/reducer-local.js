import { persistentReducer } from 'redux-pouchdb';
import { LOCAL_INITIAL_STATE } from './state-local';

import {
  GET_LOCAL_STORAGE,
  DELETE_STORAGE,
  SET_LOCAL_STORAGE,
  SET_VIEW_ACTIONS
} from './constant-local';



function localReducer (state = LOCAL_INITIAL_STATE, action) {
  const prevState = {...state};

  switch (action.type) {
    case DELETE_STORAGE:
      return {...state, localAuth: action.payload};

    case GET_LOCAL_STORAGE:
      return {...state, localAuth: action.payload};

    case SET_VIEW_ACTIONS:
      return {...state, localViewActions: action.payload};

    case SET_LOCAL_STORAGE:
      return {...state, localAuth: {...prevState.localAuth, ...action.payload}};

    default:
      return state;
  }
}

export default persistentReducer(localReducer);
