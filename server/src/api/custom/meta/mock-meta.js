import faker from 'faker';
import moment from 'moment';
import user from '../user/mock-user';


export default function metaMock ({ roles }) {
  return {
    created:   moment(faker.date.past()).toISOString(),
    createdBy: user({ roles }),
    updated:   moment(faker.date.recent()).toISOString(),
    updatedBy: user({ roles })
  };
};
