import numbersMock from './mock-numbers';
import {
  generateMethod,
  generateNMethod
} from '../helpers-fakegql.js';
import faker from 'faker';


const mock = numbersMock;

class Numbers {
  generate ({ args }) {
    return generateMethod({ 
      args, 
      mock,
      props: { _id : faker.random.uuid() }
    });
  }

  generateN ({ args }) {
    return generateNMethod({ 
      args, 
      mock,
      props: { _id : faker.random.uuid() }
    });
  }
};

export default new Numbers();
