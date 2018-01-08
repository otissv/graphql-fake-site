'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = mocks;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _mockAddress = require('../address/mock-address');

var _mockAddress2 = _interopRequireDefault(_mockAddress);

var _mockCompany = require('../company/mock-company');

var _mockCompany2 = _interopRequireDefault(_mockCompany);

var _mockCard = require('../card/mock-card');

var _mockCard2 = _interopRequireDefault(_mockCard);

var _mockColor = require('../color/mock-color');

var _mockColor2 = _interopRequireDefault(_mockColor);

var _mockCommerce = require('../commerce/mock-commerce');

var _mockCommerce2 = _interopRequireDefault(_mockCommerce);

var _mockDatabase = require('../database/mock-database');

var _mockDatabase2 = _interopRequireDefault(_mockDatabase);

var _mockDateTime = require('../dateTime/mock-dateTime');

var _mockDateTime2 = _interopRequireDefault(_mockDateTime);

var _mockFinance = require('../finance/mock-finance');

var _mockFinance2 = _interopRequireDefault(_mockFinance);

var _mockHacker = require('../hacker/mock-hacker');

var _mockHacker2 = _interopRequireDefault(_mockHacker);

var _mockImage = require('../image/mock-image');

var _mockImage2 = _interopRequireDefault(_mockImage);

var _mockInternet = require('../internet/mock-internet');

var _mockInternet2 = _interopRequireDefault(_mockInternet);

var _mockLorem = require('../lorem/mock-lorem');

var _mockLorem2 = _interopRequireDefault(_mockLorem);

var _mockMisc = require('../misc/mock-misc');

var _mockMisc2 = _interopRequireDefault(_mockMisc);

var _mockNumbers = require('../numbers/mock-numbers');

var _mockNumbers2 = _interopRequireDefault(_mockNumbers);

var _mockPerson = require('../person/mock-person');

var _mockPerson2 = _interopRequireDefault(_mockPerson);

var _mockPhone = require('../phone/mock-phone');

var _mockPhone2 = _interopRequireDefault(_mockPhone);

var _mockSystem = require('../system/mock-system');

var _mockSystem2 = _interopRequireDefault(_mockSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mocks(_ref) {
  var arrayOfDigits = _ref.arrayOfDigits,
      arrayOfDoubles = _ref.arrayOfDoubles,
      arrayOfIntegers = _ref.arrayOfIntegers,
      arrayOfWords = _ref.arrayOfWords,
      cardVendor = _ref.cardVendor,
      dataFormat = _ref.dataFormat,
      doubleFrom = _ref.doubleFrom,
      doubleTo = _ref.doubleTo,
      integerFrom = _ref.integerFrom,
      integerTo = _ref.integerTo,
      locale = _ref.locale,
      randomFrom = _ref.randomFrom,
      randomTo = _ref.randomTo,
      sentences = _ref.sentences,
      timeFormat = _ref.timeFormat,
      words = _ref.words,
      customInt = _ref.customInt,
      customFloat = _ref.customFloat,
      customString = _ref.customString,
      customBoolean = _ref.customBoolean,
      customID = _ref.customID;


  if (locale) {
    _faker2.default.locale = locale;
  }

  return _extends({}, (0, _mockAddress2.default)(), (0, _mockCompany2.default)(), (0, _mockCard2.default)({ cardVendor: cardVendor }), (0, _mockColor2.default)(), (0, _mockCommerce2.default)(), (0, _mockDatabase2.default)(), (0, _mockDateTime2.default)({
    dataFormat: dataFormat,
    timeFormat: timeFormat
  }), (0, _mockFinance2.default)(), (0, _mockHacker2.default)(), (0, _mockImage2.default)(), (0, _mockInternet2.default)(), (0, _mockLorem2.default)({ arrayOfWords: arrayOfWords, sentences: sentences, words: words }), (0, _mockMisc2.default)(), (0, _mockNumbers2.default)({
    arrayOfDigits: arrayOfDigits,
    arrayOfDoubles: arrayOfDoubles,
    arrayOfIntegers: arrayOfIntegers,
    doubleFrom: doubleFrom,
    doubleTo: doubleTo,
    integerFrom: integerFrom,
    integerTo: integerTo,
    randomFrom: randomFrom,
    randomTo: randomTo
  }), (0, _mockPerson2.default)(), (0, _mockPhone2.default)(), (0, _mockSystem2.default)(), {
    customInt: customInt,
    customFloat: customFloat,
    customString: customString,
    customBoolean: customBoolean,
    customID: customID
  });
};