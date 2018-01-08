import { query } from '../helpers/async-query';
import { arrayToObject } from '../helpers';

import { 
  localAuth,
  deleteAppStorage,
  setAppStorage,
  // viewActionsStorage
} from './services-local';

import {
  DELETE_STORAGE,
  GET_LOCAL_STORAGE,
  GET_VIEW_ACTIONS,
  SET_LOCAL_STORAGE,
  SET_VIEW_ACTIONS
} from './constant-local';

import {
  API_ROUTE
} from '../constants/routes-constants';


export function deleteLocalStorage () {
  deleteAppStorage();

  return {
    type: DELETE_STORAGE,
    payload: null
  };
}


export function getLocalStorage () {
  return {
    type: GET_LOCAL_STORAGE,
    payload: localAuth()
  };
}

export function getViewActions () {
  const { id, token } = localAuth();

  const request = query({
    url    : API_ROUTE,
    auth   : { id, token },
    actions: ['viewFindAll'],

    query  :`query {
      viewFindAll {
        roles
        type
      }
    }`
  });

  return {
    type: GET_VIEW_ACTIONS,
    payload: request.then(response => response)
  };
}


export function setLocalStorage (storage) {
  setAppStorage(storage);

  return {
    type: SET_LOCAL_STORAGE,
    payload: storage
  };
}

export function setViewActions (viewActions) {
  const viewActionsList = arrayToObject(viewActions);
  const viewActionsObj = viewActionsList('type', '');

  return {
    type: SET_VIEW_ACTIONS,
    payload: viewActionsObj
  };
}
