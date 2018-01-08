import context from '../context-fakegql';


export const imageQueries = {
  Image (_, args, context) {
    return context.connectors.image.generate({ args, ...context });
  },

  ImageList (_, args, context) {
    return context.connectors.image.generateN({ args, ...context });
  }
};


export const Image = {...context};

