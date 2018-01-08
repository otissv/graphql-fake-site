import context from '../context-fakegql';


export const miscQueries = {
  Misc (_, args, context) {
    return context.connectors.misc.generate({ args, ...context });
  },

  MiscList (_, args, context) {
    return context.connectors.misc.generateN({ args, ...context });
  }
};


export const Misc = {...context};

