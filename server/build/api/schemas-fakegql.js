'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaAddress = require('./address/schema-address');

var _schemaAddress2 = _interopRequireDefault(_schemaAddress);

var _schemaCompany = require('./company/schema-company');

var _schemaCompany2 = _interopRequireDefault(_schemaCompany);

var _schemaCard = require('./card/schema-card');

var _schemaCard2 = _interopRequireDefault(_schemaCard);

var _schemaCardTransaction = require('./custom/cardTransaction/schema-cardTransaction');

var _schemaCardTransaction2 = _interopRequireDefault(_schemaCardTransaction);

var _schemaColor = require('./color/schema-color');

var _schemaColor2 = _interopRequireDefault(_schemaColor);

var _schemaCommerce = require('./commerce/schema-commerce');

var _schemaCommerce2 = _interopRequireDefault(_schemaCommerce);

var _schemaDatabase = require('./database/schema-database');

var _schemaDatabase2 = _interopRequireDefault(_schemaDatabase);

var _schemaDateTime = require('./dateTime/schema-dateTime');

var _schemaDateTime2 = _interopRequireDefault(_schemaDateTime);

var _schemaFake = require('./fake/schema-fake');

var _schemaFake2 = _interopRequireDefault(_schemaFake);

var _schemaFinance = require('./finance/schema-finance');

var _schemaFinance2 = _interopRequireDefault(_schemaFinance);

var _schemaHacker = require('./hacker/schema-hacker');

var _schemaHacker2 = _interopRequireDefault(_schemaHacker);

var _schemaImage = require('./image/schema-image');

var _schemaImage2 = _interopRequireDefault(_schemaImage);

var _schemaInternet = require('./internet/schema-internet');

var _schemaInternet2 = _interopRequireDefault(_schemaInternet);

var _schemaLorem = require('./lorem/schema-lorem');

var _schemaLorem2 = _interopRequireDefault(_schemaLorem);

var _schemaMessage = require('./custom/message/schema-message');

var _schemaMessage2 = _interopRequireDefault(_schemaMessage);

var _schemaMeta = require('./custom/meta/schema-meta');

var _schemaMeta2 = _interopRequireDefault(_schemaMeta);

var _schemaMeeting = require('./custom/meeting/schema-meeting');

var _schemaMeeting2 = _interopRequireDefault(_schemaMeeting);

var _schemaMisc = require('./misc/schema-misc');

var _schemaMisc2 = _interopRequireDefault(_schemaMisc);

var _schemaNumbers = require('./numbers/schema-numbers');

var _schemaNumbers2 = _interopRequireDefault(_schemaNumbers);

var _schemaPerson = require('./person/schema-person');

var _schemaPerson2 = _interopRequireDefault(_schemaPerson);

var _schemaPhone = require('./phone/schema-phone');

var _schemaPhone2 = _interopRequireDefault(_schemaPhone);

var _schemaSystem = require('./system/schema-system');

var _schemaSystem2 = _interopRequireDefault(_schemaSystem);

var _schemaTransaction = require('./custom/transaction/schema-transaction');

var _schemaTransaction2 = _interopRequireDefault(_schemaTransaction);

var _schemaUser = require('./custom/user/schema-user');

var _schemaUser2 = _interopRequireDefault(_schemaUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefinitions = '\ntype Query {\n  ' + _schemaAddress.addressQueries + '\n  ' + _schemaCompany.businessQueries + '\n  ' + _schemaCard.cardQueries + '\n  ' + _schemaCardTransaction.cardTransactionQueries + '\n  ' + _schemaColor.colorQueries + '\n  ' + _schemaCommerce.commerceQueries + '\n  ' + _schemaDatabase.databaseQueries + '\n  ' + _schemaDateTime.dateTimeQueries + '\n  ' + _schemaFake.fakeQueries + '\n  ' + _schemaFinance.financeQueries + '\n  ' + _schemaHacker.hackerQueries + '\n  ' + _schemaImage.imageQueries + '\n  ' + _schemaInternet.internetQueries + '\n  ' + _schemaLorem.loremQueries + '\n  ' + _schemaMessage.messageQueries + '\n  ' + _schemaMeta.metaQueries + '\n  ' + _schemaMeeting.meetingQueries + '\n  ' + _schemaMisc.miscQueries + '\n  ' + _schemaNumbers.numbersQueries + '\n  ' + _schemaPerson.personQueries + '\n  ' + _schemaPhone.phoneQueries + '\n  ' + _schemaSystem.systemQueries + '\n  ' + _schemaTransaction.transactionQueries + '\n  ' + _schemaUser.userQueries + '\n}\n\nschema {\n  query: Query\n}\n';

exports.default = [typeDefinitions, _schemaAddress2.default, _schemaCompany2.default, _schemaCard2.default, _schemaCardTransaction2.default, _schemaColor2.default, _schemaCommerce2.default, _schemaDatabase2.default, _schemaDateTime2.default, _schemaFake2.default, _schemaFinance2.default, _schemaHacker2.default, _schemaImage2.default, _schemaInternet2.default, _schemaLorem2.default, _schemaMessage2.default, _schemaMeta2.default, _schemaMeeting2.default, _schemaMisc2.default, _schemaNumbers2.default, _schemaPerson2.default, _schemaPhone2.default, _schemaSystem2.default, _schemaTransaction2.default, _schemaUser2.default];