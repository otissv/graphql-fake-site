import faker from 'faker';
import address from '../address/mock-address';
import company from '../company/mock-company';
import card from '../card/mock-card';
import color from '../color/mock-color';
import commerce from '../commerce/mock-commerce';
import database from '../database/mock-database';
import dateTime from '../dateTime/mock-dateTime';
import finance from '../finance/mock-finance';
import hacker from '../hacker/mock-hacker';
import image from '../image/mock-image';
import internet from '../internet/mock-internet';
import lorem from '../lorem/mock-lorem';
import misc from '../misc/mock-misc';
import numbers from '../numbers/mock-numbers';
import person from '../person/mock-person';
import phone from '../phone/mock-phone';
import system from '../system/mock-system';



export default function mocks ({
  arrayOfDigits,
  arrayOfDoubles,
  arrayOfIntegers,
  arrayOfWords,
  cardVendor,
  dataFormat,
  doubleFrom,
  doubleTo,
  integerFrom,
  integerTo,
  locale,
  randomFrom,
  randomTo,
  sentences,
  timeFormat,
  words,
  customInt,
  customFloat,
  customString,
  customBoolean,
  customID
}) {

  if (locale) {
    faker.locale = locale;
  }


  return {
    ...address(),
    ...company(),
    ...card({ cardVendor }),
    ...color(),
    ...commerce(),
    ...database(),
    ...dateTime({
      dataFormat,
      timeFormat
    }),
    ...finance(),
    ...hacker(),
    ...image(),
    ...internet(),
    ...lorem({ arrayOfWords, sentences, words }),
    ...misc(),
    ...numbers({
      arrayOfDigits,
      arrayOfDoubles,
      arrayOfIntegers,
      doubleFrom,
      doubleTo,
      integerFrom,
      integerTo,
      randomFrom,
      randomTo
    }),
    ...person(),
    ...phone(),
    ...system(),
    customInt,
    customFloat,
    customString,
    customBoolean,
    customID
  };
};
