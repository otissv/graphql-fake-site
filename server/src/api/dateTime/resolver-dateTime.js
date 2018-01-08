import context from '../context-fakegql';


export const dateTimeQueries = {
  DateTime (_, args, context) {
    return context.connectors.dateTime.generate({ args, ...context });
  },

  DateTimeList (_, args, context) {
    return context.connectors.dateTime.generateN({ args, ...context });
  }
};


export const DateTime = {...context};

