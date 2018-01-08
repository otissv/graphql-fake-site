import context from '../context-fakegql';


export const fakeQueries = {
  Fake (_, args, context) {
    return context.connectors.fake.generate({ args, ...context });
  },

  FakeList (_, args, context) {
    return context.connectors.fake.generateN({ args, ...context });
  }
};


export const Fake = { ...context };

