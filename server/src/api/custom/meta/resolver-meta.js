import context from '../../context-fakegql';


export const metaQueries = {
  Meta (_, args, context) {
    return context.connectors.meta.generate({ args, ...context });
  },

  MetaList (_, args, context) {
    return context.connectors.meta.generateN({ args, ...context });
  }
};


export const Meta = {...context};

