import context from '../../context-fakegql';


export const cardTransactionQueries = {
  CardTransaction (_, args, context) {
    return context.connectors.cardTransaction.generate({ args, ...context });
  },

  CardTransactionList (_, args, context) {
    return context.connectors.cardTransaction.generateN({ args, ...context });
  }
};


export const CardTransaction = {...context};

