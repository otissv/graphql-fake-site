import faker from 'faker';

export default function databaseMock () {
  return {
    column:    faker.database.column(),
    type:      faker.database.type(),
    collation: faker.database.collation(),
    engine:    faker.database.engine()
  };
};
