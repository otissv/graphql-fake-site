import casual from 'casual';
import faker from 'faker';
import address from '../../address/mock-address';

export default function userMock ({
  roles
}) {
  return {
    _id:           casual.uuid,
    name:          casual.name,
    email:         casual.email,
    username:      casual.username,
    firstName:     casual.first_name,
    lastName:      casual.last_name,
    fullName:      casual.full_name,
    password:      casual.password,
    namePrefix:    casual.name_prefix,
    nameSuffix:    casual.name_suffix,
    jobTitle:      faker.name.title(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobArea:       faker.name.jobArea(),
    jobType:       faker.name.jobType(),

    avatar:        faker.image.avatar(),
    address:       address(),
    company: {
      _id:          casual.uuid,
      companyName: faker.company.companyName()
    },
    phoneNumber:    faker.phone.phoneNumber(),
    website:        faker.internet.domainName(),
    roles
  };
};
