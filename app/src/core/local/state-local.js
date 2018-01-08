
export const LOCAL_INITIAL_STATE = {
  localAuth : null,
  localViewActions: {}
};

export default function mapStateToProps (state) {
  return {
    localAuth:        state.local.localAuth,
    localViewActions: state.local.localViewActions
  };
}
