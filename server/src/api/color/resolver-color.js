import context from '../context-fakegql';


export const colorQueries = {
  Color (_, args, context) {
    return context.connectors.color.generate({ args, ...context });
  },

  ColorList (_, args, context) {
    return context.connectors.color.generateN({ args, ...context });
  }
};


export const Color = { ...context };

