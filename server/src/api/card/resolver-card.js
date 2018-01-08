import context from '../context-fakegql';


export const cardQueries = {
  Card (_, args, context) {
    return context.connectors.card.generate({ args, ...context });
  },

  CardList (_, args, context) {
    return context.connectors.card.generateN({ args, ...context });
  }
};


export const Card = { ...context };
