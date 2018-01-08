import context from '../context-fakegql';


export const internetQueries = {
  Internet (_, args, context) {
    return context.connectors.internet.generate({ args, ...context });
  },

  InternetList (_, args, context) {
    return context.connectors.internet.generateN({ args, ...context });
  }
};


export const Internet = {...context};

