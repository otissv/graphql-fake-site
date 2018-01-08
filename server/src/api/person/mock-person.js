import faker from 'faker';

export default function personMock () {
  return {
    name:          `${faker.name.prefix()} ${faker.name.firstName()} ${faker.name.lastName()}`,
    email:         faker.internet.email(),
    username:      faker.internet.userName(),
    firstName:     faker.name.firstName(),
    lastName:      faker.name.lastName(),
    fullName:      `${faker.name.firstName()} ${faker.name.lastName()}`,
    password:      faker.internet.password(),
    namePrefix:    faker.name.prefix(),
    nameSuffix:    faker.name.suffix(),
    jobTitle:      faker.name.title(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobArea:       faker.name.jobArea(),
    jobType:       faker.name.jobType()
  };
};
