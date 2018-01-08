import faker from 'faker';

export default function businessMock () {
  return {
    companyName:           faker.company.companyName(),
    companySuffix:         faker.company.companySuffix(),
    catchPhrase:           faker.company.catchPhrase(),
    suffixes:              faker.company.suffixes(),
    bs:                    faker.company.bs(),
    catchPhraseAdjective:  faker.company.catchPhraseAdjective(),
    catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
    catchPhraseNoun:       faker.company.catchPhraseNoun(),
    bsAdjective:           faker.company.bsAdjective(),
    bsBuzz:                faker.company.bsBuzz(),
    bsNoun:                faker.company.bsNoun()
  };
};
