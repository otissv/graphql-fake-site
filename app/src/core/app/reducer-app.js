
import { APP_INITIAL_STATE } from './state-app';

import {
  ALERT,
  LOADING,
  LOGGEDIN,
  ROUTES
} from './constant-app';



export default function appReducer (state = APP_INITIAL_STATE, action) {

  switch (action.type) {
    case ALERT:
      return {...state, alert: action.payload};

    case LOADING:
      return {...state, appIsLoading: action.payload};

    case LOGGEDIN:
      return {...state, appIsLoggedIn: action.payload};

    case ROUTES:
      return {...state, appRoutes: action.payload};

    default:
      return state;
  }
}
