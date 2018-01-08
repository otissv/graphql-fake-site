import faker from 'faker';
import casual from 'casual';
import { getDates } from '../../helpers-fakegql';
import person from '../../person/mock-person';
import address from '../../address/mock-address';


export default function meetingMock () {
  return {
    allDay:      faker.random.boolean(),
    address:     address(),
    invited:     [person(), person(), person()],
    description: faker.lorem.sentence(),
    end:         getDates().endDate,
    start:       getDates().startDate,
    title:       casual.title
  };
};
