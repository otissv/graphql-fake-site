import context from '../context-fakegql';


export const loremQueries = {
  Lorem (_, args, context) {
    return context.connectors.lorem.generate({ args, ...context });
  },

  LoremList (_, args, context) {
    return context.connectors.lorem.generateN({ args, ...context });
  }
};


export const Lorem = {...context};
