'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connectorAddress = require('./address/connector-address');

var _connectorAddress2 = _interopRequireDefault(_connectorAddress);

var _connectorCompany = require('./company/connector-company');

var _connectorCompany2 = _interopRequireDefault(_connectorCompany);

var _connectorCard = require('./card/connector-card');

var _connectorCard2 = _interopRequireDefault(_connectorCard);

var _connectorCardTransaction = require('./custom/cardTransaction/connector-cardTransaction');

var _connectorCardTransaction2 = _interopRequireDefault(_connectorCardTransaction);

var _connectorColor = require('./color/connector-color');

var _connectorColor2 = _interopRequireDefault(_connectorColor);

var _connectorCommerce = require('./commerce/connector-commerce');

var _connectorCommerce2 = _interopRequireDefault(_connectorCommerce);

var _connectorDatabase = require('./database/connector-database');

var _connectorDatabase2 = _interopRequireDefault(_connectorDatabase);

var _connectorDateTime = require('./dateTime/connector-dateTime');

var _connectorDateTime2 = _interopRequireDefault(_connectorDateTime);

var _connectorFake = require('./fake/connector-fake');

var _connectorFake2 = _interopRequireDefault(_connectorFake);

var _connectorFinance = require('./finance/connector-finance');

var _connectorFinance2 = _interopRequireDefault(_connectorFinance);

var _connectorHacker = require('./hacker/connector-hacker');

var _connectorHacker2 = _interopRequireDefault(_connectorHacker);

var _connectorImage = require('./image/connector-image');

var _connectorImage2 = _interopRequireDefault(_connectorImage);

var _connectorInternet = require('./internet/connector-internet');

var _connectorInternet2 = _interopRequireDefault(_connectorInternet);

var _connectorLorem = require('./lorem/connector-lorem');

var _connectorLorem2 = _interopRequireDefault(_connectorLorem);

var _connectorMessage = require('./custom/message/connector-message');

var _connectorMessage2 = _interopRequireDefault(_connectorMessage);

var _connectorMeta = require('./custom/meta/connector-meta');

var _connectorMeta2 = _interopRequireDefault(_connectorMeta);

var _connectorMeeting = require('./custom/meeting/connector-meeting');

var _connectorMeeting2 = _interopRequireDefault(_connectorMeeting);

var _connectorMisc = require('./misc/connector-misc');

var _connectorMisc2 = _interopRequireDefault(_connectorMisc);

var _connectorNumbers = require('./numbers/connector-numbers');

var _connectorNumbers2 = _interopRequireDefault(_connectorNumbers);

var _connectorPerson = require('./person/connector-person');

var _connectorPerson2 = _interopRequireDefault(_connectorPerson);

var _connectorPhone = require('./phone/connector-phone');

var _connectorPhone2 = _interopRequireDefault(_connectorPhone);

var _connectorSystem = require('./system/connector-system');

var _connectorSystem2 = _interopRequireDefault(_connectorSystem);

var _connectorTransaction = require('./custom/transaction/connector-transaction');

var _connectorTransaction2 = _interopRequireDefault(_connectorTransaction);

var _connectorUser = require('./custom/user/connector-user');

var _connectorUser2 = _interopRequireDefault(_connectorUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // article: Article,
  address: _connectorAddress2.default,
  company: _connectorCompany2.default,
  card: _connectorCard2.default,
  cardTransaction: _connectorCardTransaction2.default,
  color: _connectorColor2.default,
  commerce: _connectorCommerce2.default,
  // comment: Comment,
  database: _connectorDatabase2.default,
  dateTime: _connectorDateTime2.default,
  fake: _connectorFake2.default,
  finance: _connectorFinance2.default,
  hacker: _connectorHacker2.default,
  image: _connectorImage2.default,
  internet: _connectorInternet2.default,
  lorem: _connectorLorem2.default,
  message: _connectorMessage2.default,
  meta: _connectorMeta2.default,
  meeting: _connectorMeeting2.default,
  misc: _connectorMisc2.default,
  numbers: _connectorNumbers2.default,
  person: _connectorPerson2.default,
  phone: _connectorPhone2.default,
  system: _connectorSystem2.default,
  transaction: _connectorTransaction2.default,
  user: _connectorUser2.default
};