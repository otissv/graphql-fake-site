import context from '../context-fakegql';


export const financeQueries = {
  Finance (_, args, context) {
    return context.connectors.finance.generate({ args, ...context });
  },

  FinanceList (_, args, context) {
    return context.connectors.finance.generateN({ args, ...context });
  }
};


export const Finance = {...context};

