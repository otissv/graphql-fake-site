import faker from 'faker';

export default function hackerMock () {
  return {
    hackerAbbreviation:      faker.hacker.abbreviation(),
    hackerAdjective:         faker.hacker.adjective(),
    hackerNoun:              faker.hacker.noun(),
    hackerVerb:              faker.hacker.verb(),
    hackerIngverb:           faker.hacker.ingverb(),
    hackerPhrase:            faker.hacker.phrase()
  };
};
