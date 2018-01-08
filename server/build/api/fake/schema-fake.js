'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fakeQueries = undefined;

var _addressFields = require('../fields/address-fields');

var _addressFields2 = _interopRequireDefault(_addressFields);

var _companyFields = require('../fields/company-fields');

var _companyFields2 = _interopRequireDefault(_companyFields);

var _cardFields = require('../fields/card-fields');

var _cardFields2 = _interopRequireDefault(_cardFields);

var _colorFields = require('../fields/color-fields');

var _colorFields2 = _interopRequireDefault(_colorFields);

var _commerceFields = require('../fields/commerce-fields');

var _commerceFields2 = _interopRequireDefault(_commerceFields);

var _currencyFields = require('../fields/currency-fields');

var _currencyFields2 = _interopRequireDefault(_currencyFields);

var _databaseFields = require('../fields/database-fields');

var _databaseFields2 = _interopRequireDefault(_databaseFields);

var _dateTimeFields = require('../fields/dateTime-fields');

var _dateTimeFields2 = _interopRequireDefault(_dateTimeFields);

var _financeFields = require('../fields/finance-fields');

var _financeFields2 = _interopRequireDefault(_financeFields);

var _hackerFields = require('../fields/hacker-fields');

var _hackerFields2 = _interopRequireDefault(_hackerFields);

var _imageFields = require('../fields/image-fields');

var _imageFields2 = _interopRequireDefault(_imageFields);

var _internetFields = require('../fields/internet-fields');

var _internetFields2 = _interopRequireDefault(_internetFields);

var _loremFields = require('../fields/lorem-fields');

var _loremFields2 = _interopRequireDefault(_loremFields);

var _miscFields = require('../fields/misc-fields');

var _miscFields2 = _interopRequireDefault(_miscFields);

var _nestedFields = require('../fields/nested-fields');

var _nestedFields2 = _interopRequireDefault(_nestedFields);

var _numbersFields = require('../fields/numbers-fields');

var _numbersFields2 = _interopRequireDefault(_numbersFields);

var _personFields = require('../fields/person-fields');

var _personFields2 = _interopRequireDefault(_personFields);

var _phoneFields = require('../fields/phone-fields');

var _phoneFields2 = _interopRequireDefault(_phoneFields);

var _systemFields = require('../fields/system-fields');

var _systemFields2 = _interopRequireDefault(_systemFields);

var _typesFields = require('../fields/types-fields');

var _typesFields2 = _interopRequireDefault(_typesFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\ntype Currency {\n  symbol:         String,\n  name:           String,\n  symbol_native:  String,\n  decimal_digits: String,\n  rounding:       Int,\n  code:           String,\n  namePlural:     String,\n}\n\n\ntype Fake {\n  ' + _addressFields2.default + ',\n  ' + _companyFields2.default + ',\n  ' + _cardFields2.default + ',\n  ' + _colorFields2.default + ',\n  ' + _commerceFields2.default + ',\n  ' + _currencyFields2.default + '\n  ' + _databaseFields2.default + '\n  ' + _dateTimeFields2.default + ',\n  ' + _financeFields2.default + ',\n  ' + _hackerFields2.default + ',\n  ' + _imageFields2.default + ',\n  ' + _internetFields2.default + ',\n  ' + _loremFields2.default + ',\n  ' + _miscFields2.default + ',\n  ' + _nestedFields2.default + ',\n  ' + _numbersFields2.default + ',\n  ' + _personFields2.default + ',\n  ' + _phoneFields2.default + ',\n  ' + _systemFields2.default + '\n  ' + _typesFields2.default + '\n}\n';
var fakeQueries = exports.fakeQueries = '\n  Fake(\n    locale: String,\n    cardVendor: String,\n    timeFormat: String,\n    dataFormat: String,\n    integerFrom: Int,\n    integerTo: Int,\n    doubleFrom: Int,\n    doubleTo: Int,\n    arrayOfDigits: Int,\n    arrayOfIntegers: Int,\n    arrayOfDoubles: Int,\n    sentences: Int,\n    words: Int,\n    arrayOfWords: Int,\n    customInt: Int,\n    customFloat: Float,\n    customString: String,\n    customBoolean: Boolean,\n    customID: ID\n    ): Fake\n\n  FakeList (\n    locale: String,\n    length: Int, \n    cardVendor: String,\n    timeFormat: String,\n    dataFormat: String,\n    integerFrom: Int,\n    integerTo: Int,\n    doubleFrom: Int,\n    doubleTo: Int,\n    arrayOfDigits: Int,\n    arrayOfIntegers: Int,\n    arrayOfDoubles: Int,\n    sentences: Int,\n    words: Int,\n    arrayOfWords: Int,\n    customInt: Int,\n    customFloat: Float,\n    customString: String,\n    customBoolean: Boolean,\n    customID: ID\n    ): [Fake]\n';

// fakeFinance:  Finance,
// fakeFinances: [Finance],
// fakePayment:  [Payment],
// fakePerson:   Person,
// fakePeople:   [Person]