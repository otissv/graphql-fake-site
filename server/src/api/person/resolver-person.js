import context from '../context-fakegql';


export const personQueries = {
  Person (_, args, context) {
    return context.connectors.person.generate({ args, ...context });
  },

  PersonList (_, args, context) {
    return context.connectors.person.generateN({ args, ...context });
  }
};


export const Person = {...context};

