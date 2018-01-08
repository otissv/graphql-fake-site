import meetingMock from './mock-meeting';
import {
  generateMethod,
  generateNMethod
} from '../../helpers-fakegql.js';
import faker from 'faker';


const mock = meetingMock;

class Meeting {
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

export default new Meeting();
