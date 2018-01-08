import { browserHistory } from 'react-router';

import { 
  updateAppStorage
} from './../local/services-local';

import {
  ALERT,
  LOADING,  
  LOCATION,
  LOGGEDIN,
  ROUTES
} from './constant-app';


export function setAlert (alertObject) {
  return {
    type: ALERT,
    payload:{ ...alertObject, show: true }
  };
}

export function redirectTo (path) {
  browserHistory.push(path);

  return {
    type: LOCATION,
    payload: path
  };
}

export function loggedIn (bool) {
  return {
    type: LOGGEDIN,
    payload: bool
  };
}

export function loading (bool) {
  return {
    type: LOADING,
    payload: bool
  };
}

export function setLocation (lastLocation) {
  updateAppStorage({ lastLocation });

  return {
    type: LOCATION,
    payload: lastLocation
  };
}

export function setRoutes (routes) {
  return {
    type: ROUTES,
    payload: routes
  };
}
