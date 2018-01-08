import context from '../context-fakegql';


export const systemQueries = {
  System (_, args, context) {
    return context.connectors.system.generate({ args, ...context });
  },

  SystemList (_, args, context) {
    return context.connectors.system.generateN({ args, ...context });
  }
};


export const System = {...context};

