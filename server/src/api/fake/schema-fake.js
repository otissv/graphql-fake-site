import address from '../fields/address-fields';
import company from '../fields/company-fields';
import card from '../fields/card-fields';
import color from '../fields/color-fields';
import commerce from '../fields/commerce-fields';
import currency from '../fields/currency-fields';
import database from '../fields/database-fields';
import dateTime from '../fields/dateTime-fields';
import finance from '../fields/finance-fields';
import hacker from '../fields/hacker-fields';
import image from '../fields/image-fields';
import internet from '../fields/internet-fields';
import lorem from '../fields/lorem-fields';
import misc from '../fields/misc-fields';
import nested from '../fields/nested-fields';
import numbers from '../fields/numbers-fields';
import person from '../fields/person-fields';
import phone from '../fields/phone-fields';
import system from '../fields/system-fields';
import types from '../fields/types-fields';

export default `
type Currency {
  symbol:         String,
  name:           String,
  symbol_native:  String,
  decimal_digits: String,
  rounding:       Int,
  code:           String,
  namePlural:     String,
}


type Fake {
  ${address},
  ${company},
  ${card},
  ${color},
  ${commerce},
  ${currency}
  ${database}
  ${dateTime},
  ${finance},
  ${hacker},
  ${image},
  ${internet},
  ${lorem},
  ${misc},
  ${nested},
  ${numbers},
  ${person},
  ${phone},
  ${system}
  ${types}
}
`;



export const fakeQueries = `
  Fake(
    locale: String,
    cardVendor: String,
    timeFormat: String,
    dataFormat: String,
    integerFrom: Int,
    integerTo: Int,
    doubleFrom: Int,
    doubleTo: Int,
    arrayOfDigits: Int,
    arrayOfIntegers: Int,
    arrayOfDoubles: Int,
    sentences: Int,
    words: Int,
    arrayOfWords: Int,
    customInt: Int,
    customFloat: Float,
    customString: String,
    customBoolean: Boolean,
    customID: ID
    ): Fake

  FakeList (
    locale: String,
    length: Int, 
    cardVendor: String,
    timeFormat: String,
    dataFormat: String,
    integerFrom: Int,
    integerTo: Int,
    doubleFrom: Int,
    doubleTo: Int,
    arrayOfDigits: Int,
    arrayOfIntegers: Int,
    arrayOfDoubles: Int,
    sentences: Int,
    words: Int,
    arrayOfWords: Int,
    customInt: Int,
    customFloat: Float,
    customString: String,
    customBoolean: Boolean,
    customID: ID
    ): [Fake]
`;

  // fakeFinance:  Finance,
  // fakeFinances: [Finance],
  // fakePayment:  [Payment],
  // fakePerson:   Person,
  // fakePeople:   [Person]
