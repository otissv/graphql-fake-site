import userMock from './mock-user';
import {
  generateMethod,
  generateNMethod
} from '../../helpers-fakegql.js';
import faker from 'faker';


const mock = userMock;

class User {
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

export default new User();
