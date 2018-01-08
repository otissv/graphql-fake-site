import context from '../context-fakegql';


export const addressQueries = {
  Address (_, args, context) {
    return context.connectors.address.generate({ args, ...context });
  },

  AddressList (_, args, context) {
    return context.connectors.address.generateN({ args, ...context });
  }
};


export const Address = { ...context };

