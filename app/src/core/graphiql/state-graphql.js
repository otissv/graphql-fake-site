export const GRAPHIQL_INITIAL_STATE = {
  introspection: {},
  gqlTheme: 'material'
};


export default function mapStateToProps (state) {
  return {
    introspection: state.graphiql.introspection,
    gqlTheme: state.graphiql.gqlTheme
  };
}
