import casual from 'casual';
import faker from 'faker';
import { randNumber } from '../helpers-fakegql';

export default function numbersMock ({
    integerFrom = -1000, 
    integerTo = 1000,
    doubleFrom = -1000, 
    doubleTo = 1000,
    arrayOfDigits = 7,
    arrayOfIntegers = 7,
    arrayOfDoubles = 7,
    randomFrom = 0,
    randomTo = 1000
  }) {
  return {
    random:                  faker.random.number,
    integer:                 casual.integer(integerFrom, integerTo),
    double:                  casual.double(doubleFrom, doubleTo),
    arrayOfDigits:           casual.array_of_digits(arrayOfDigits),
    arrayOfIntegers:         casual.array_of_integers(arrayOfIntegers),
    arrayOfDoubles:          casual.array_of_doubles(arrayOfDoubles),
    randomBetween:           randNumber(randomFrom, randomTo)
  };
};

