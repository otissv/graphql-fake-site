import context from '../../context-fakegql';


export const messageQueries = {
  Message (_, args, context) {
    return context.connectors.message.generate({ args, ...context });
  },

  MessageList (_, args, context) {
    return context.connectors.message.generateN({ args, ...context });
  }
};


export const Message = {...context};

