import messageMock from './mock-message';
import faker from 'faker';

import {
  generateMethod,
  generateNMethod
} from '../../helpers-fakegql.js';

const mock = messageMock;

class Message {
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

export default new Message();
