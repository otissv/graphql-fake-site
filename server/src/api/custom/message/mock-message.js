import casual from 'casual';
import faker from 'faker';
import moment from 'moment';

export default function messageMock () {
  return {
    from:    faker.internet.email(),
    to:      [faker.internet.email()],
    date:    moment(faker.date.past()).toISOString(),
    cc:      [faker.internet.email()],
    body:    faker.lorem.paragraphs(),
    subject: casual.title
  };
};
