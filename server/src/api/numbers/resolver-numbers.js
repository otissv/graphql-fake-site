import context from '../context-fakegql';


export const numbersQueries = {
  Numbers (_, args, context) {
    return context.connectors.numbers.generate({ args, ...context });
  },

  NumbersList (_, args, context) {
    return context.connectors.numbers.generateN({ args, ...context });
  }
};


export const Numbers = {...context};

