'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolverAddress = require('./address/resolver-address');

var _resolverCompany = require('./company/resolver-company');

var _resolverCard = require('./card/resolver-card');

var _resolverCardTransaction = require('./custom/cardTransaction/resolver-cardTransaction');

var _resolverColor = require('./color/resolver-color');

var _resolverCommerce = require('./commerce/resolver-commerce');

var _resolverDatabase = require('./database/resolver-database');

var _resolverDateTime = require('./dateTime/resolver-dateTime');

var _resolverFake = require('./fake/resolver-fake');

var _resolverFinance = require('./finance/resolver-finance');

var _resolverHacker = require('./hacker/resolver-hacker');

var _resolverImage = require('./image/resolver-image');

var _resolverInternet = require('./internet/resolver-internet');

var _resolverLorem = require('./lorem/resolver-lorem');

var _resolverMessage = require('./custom/message/resolver-message');

var _resolverMeta = require('./custom/meta/resolver-meta');

var _resolverMeeting = require('./custom/meeting/resolver-meeting');

var _resolverMisc = require('./misc/resolver-misc');

var _resolverNumbers = require('./numbers/resolver-numbers');

var _resolverPerson = require('./person/resolver-person');

var _resolverPhone = require('./phone/resolver-phone');

var _resolverSystem = require('./system/resolver-system');

var _resolverTransaction = require('./custom/transaction/resolver-transaction');

var _resolverUser = require('./custom/user/resolver-user');

exports.default = {
  Query: _extends({}, _resolverAddress.addressQueries, _resolverCompany.businessQueries, _resolverCard.cardQueries, _resolverCardTransaction.cardTransactionQueries, _resolverColor.colorQueries, _resolverCommerce.commerceQueries, _resolverDatabase.databaseQueries, _resolverDateTime.dateTimeQueries, _resolverFake.fakeQueries, _resolverFinance.financeQueries, _resolverHacker.hackerQueries, _resolverImage.imageQueries, _resolverInternet.internetQueries, _resolverLorem.loremQueries, _resolverMessage.messageQueries, _resolverMeta.metaQueries, _resolverMeeting.meetingQueries, _resolverMisc.miscQueries, _resolverNumbers.numbersQueries, _resolverPerson.personQueries, _resolverPhone.phoneQueries, _resolverSystem.systemQueries, _resolverTransaction.transactionQueries, _resolverUser.userQueries),

  Address: _resolverAddress.Address,
  Company: _resolverCompany.Company,
  Card: _resolverCard.Card,
  CardTransaction: _resolverCardTransaction.CardTransaction,
  Color: _resolverColor.Color,
  Commerce: _resolverCommerce.Commerce,
  Database: _resolverDatabase.Database,
  DateTime: _resolverDateTime.DateTime,
  Fake: _resolverFake.Fake,
  Finance: _resolverFinance.Finance,
  Hacker: _resolverHacker.Hacker,
  Image: _resolverImage.Image,
  Internet: _resolverInternet.Internet,
  Lorem: _resolverLorem.Lorem,
  Message: _resolverMessage.Message,
  Meta: _resolverMeta.Meta,
  Meeting: _resolverMeeting.Meeting,
  Misc: _resolverMisc.Misc,
  Numbers: _resolverNumbers.Numbers,
  Person: _resolverPerson.Person,
  Phone: _resolverPhone.Phone,
  System: _resolverSystem.System,
  Transaction: _resolverTransaction.Transaction,
  User: _resolverUser.User
};