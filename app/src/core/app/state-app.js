
export const APP_INITIAL_STATE = {
  alert: {},
  appIsLoading: false,
  appIsLoggedIn: false,
  appRoutes: [],
  localAuth : null,
  localViewActions: {}
};

export default function mapStateToProps (state) {
  return {
    alert:              state.app.alert,
    appEnteredLocation: window.app.location,
    appIsLoading:       state.app.appIsLoading,
    appIsLoggedIn:      state.app.appIsLoggedIn,
    appRoutes:          state.app.appRoutes,
    localAuth:         state.app.localAuth,
    localViewActions:     state.app.localViewActions
  };
}
