import context from '../context-fakegql';


export const businessQueries = {
  Company (_, args, context) {
    return context.connectors.company.generate({ args, ...context });
  },

  CompanyList (_, args, context) {
    return context.connectors.company.generateN({ args, ...context });
  }
};


export const Company = {...context};

