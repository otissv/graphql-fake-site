import context from '../context-fakegql';


export const phoneQueries = {
  Phone (_, args, context) {
    return context.connectors.phone.generate({ args, ...context });
  },

  PhoneList (_, args, context) {
    return context.connectors.phone.generateN({ args, ...context });
  }
};


export const Phone = {...context};

