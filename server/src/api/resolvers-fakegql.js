import { Address, addressQueries } from './address/resolver-address';
import { Company, businessQueries } from './company/resolver-company';
import { Card, cardQueries } from './card/resolver-card';
import { CardTransaction, cardTransactionQueries } from './custom/cardTransaction/resolver-cardTransaction';
import { Color, colorQueries } from './color/resolver-color';
import { Commerce, commerceQueries } from './commerce/resolver-commerce';
import { Database, databaseQueries } from './database/resolver-database';
import { DateTime, dateTimeQueries } from './dateTime/resolver-dateTime';
import { Fake, fakeQueries } from './fake/resolver-fake';
import { Finance, financeQueries } from './finance/resolver-finance';
import { Hacker, hackerQueries } from './hacker/resolver-hacker';
import { Image, imageQueries } from './image/resolver-image';
import { Internet, internetQueries } from './internet/resolver-internet';
import { Lorem, loremQueries } from './lorem/resolver-lorem';
import { Message, messageQueries } from './custom/message/resolver-message';
import { Meta, metaQueries } from './custom/meta/resolver-meta';
import { Meeting, meetingQueries } from './custom/meeting/resolver-meeting';
import { Misc, miscQueries } from './misc/resolver-misc';
import { Numbers, numbersQueries } from './numbers/resolver-numbers';
import { Person, personQueries } from './person/resolver-person';
import { Phone, phoneQueries } from './phone/resolver-phone';
import { System, systemQueries } from './system/resolver-system';
import { Transaction, transactionQueries } from './custom/transaction/resolver-transaction';
import { User, userQueries } from './custom/user/resolver-user';


export default {
  Query: {
    ...addressQueries,
    ...businessQueries,
    ...cardQueries,
    ...cardTransactionQueries,
    ...colorQueries,
    ...commerceQueries,
    ...databaseQueries,
    ...dateTimeQueries,
    ...fakeQueries,
    ...financeQueries,
    ...hackerQueries,
    ...imageQueries,
    ...internetQueries,
    ...loremQueries,
    ...messageQueries,
    ...metaQueries,
    ...meetingQueries,
    ...miscQueries,
    ...numbersQueries,
    ...personQueries,
    ...phoneQueries,
    ...systemQueries,
    ...transactionQueries,
    ...userQueries
  },

  Address,
  Company,
  Card,
  CardTransaction,
  Color,
  Commerce,
  Database,
  DateTime,
  Fake,
  Finance,
  Hacker,
  Image,
  Internet,
  Lorem,
  Message,
  Meta,
  Meeting,
  Misc,
  Numbers,
  Person,
  Phone,
  System,
  Transaction,
  User
};
