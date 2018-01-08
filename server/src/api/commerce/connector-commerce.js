import commerceMock from './mock-commerce';
import {
  generateMethod,
  generateNMethod
} from '../helpers-fakegql.js';
import faker from 'faker';

const mock = commerceMock;

class Commerce {
  generate ({ args }) {
    return generateMethod({ 
      args, 
      mock,
      props: { 
        _id : faker.random.uuid(),
        color: faker.commerce.color()
      }
    });
  }

  generateN ({ args }) {
    return generateNMethod({ 
      args, 
      mock,
      props: { 
        _id : faker.random.uuid(),
        color: faker.commerce.color()
      }
    });
  }
};

export default new Commerce();
