import context from '../context-fakegql';


export const databaseQueries = {
  Database (_, args, context) {
    return context.connectors.database.generate({ args, ...context });
  },

  DatabaseList (_, args, context) {
    return context.connectors.database.generateN({ args, ...context });
  }
};


export const Database = {...context};

