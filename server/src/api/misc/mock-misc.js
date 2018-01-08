import casual from 'casual';
import faker from 'faker';

export default function miscMock () {
  return {
    languageCode:            casual.language_code,
    locale:                  casual.locale,
    boolean:                 casual.boolean,
    alphaNumeric:            faker.random.alphaNumeric(),
    randomize:               faker.helpers.randomize()
  };
};
