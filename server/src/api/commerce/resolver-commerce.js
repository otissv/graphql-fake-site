import context from '../context-fakegql';


export const commerceQueries = {
  Commerce (_, args, context) {
    return context.connectors.commerce.generate({ args, ...context });
  },

  CommerceList (_, args, context) {
    return context.connectors.commerce.generateN({ args, ...context });
  }
};


export const Commerce = {...context};
