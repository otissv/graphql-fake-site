import context from '../../context-fakegql';


export const transactionQueries = {
  Transaction (_, args, context) {
    return context.connectors.transaction.generate({ args, ...context });
  },

  TransactionList (_, args, context) {
    return context.connectors.transaction.generateN({ args, ...context });
  }
};


export const Transaction = {...context};

