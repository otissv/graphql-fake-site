import context from '../../context-fakegql';


export const userQueries = {
  User (_, args, context) {
    return context.connectors.user.generate({ args, ...context });
  },

  UserList (_, args, context) {
    return context.connectors.user.generateN({ args, ...context });
  }
};


export const User = {...context};

