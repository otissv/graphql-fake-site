import context from '../context-fakegql';


export const hackerQueries = {
  Hacker (_, args, context) {
    return context.connectors.hacker.generate({ args, ...context });
  },

  HackerList (_, args, context) {
    return context.connectors.hacker.generateN({ args, ...context });
  }
};


export const Hacker = {...context};

