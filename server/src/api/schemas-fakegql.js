import address, { addressQueries } from './address/schema-address';
import company, { businessQueries } from './company/schema-company';
import card, { cardQueries } from './card/schema-card';
import cardTransaction, { cardTransactionQueries } from './custom/cardTransaction/schema-cardTransaction';
import color, { colorQueries } from './color/schema-color';
import commerce, { commerceQueries } from './commerce/schema-commerce';
import database, { databaseQueries } from './database/schema-database';
import dateTime, { dateTimeQueries } from './dateTime/schema-dateTime';
import fake, { fakeQueries } from './fake/schema-fake';
import finance, { financeQueries } from './finance/schema-finance';
import hacker, { hackerQueries } from './hacker/schema-hacker';
import image, { imageQueries } from './image/schema-image';
import internet, { internetQueries } from './internet/schema-internet';
import lorem, { loremQueries } from './lorem/schema-lorem';
import message, { messageQueries } from './custom/message/schema-message';
import meta, { metaQueries } from './custom/meta/schema-meta';
import meeting, { meetingQueries } from './custom/meeting/schema-meeting';
import misc, { miscQueries } from './misc/schema-misc';
import numbers, { numbersQueries } from './numbers/schema-numbers';
import person, { personQueries } from './person/schema-person';
import phone, { phoneQueries } from './phone/schema-phone';
import system, { systemQueries } from './system/schema-system';
import transaction, { transactionQueries } from './custom/transaction/schema-transaction';
import user, { userQueries } from './custom/user/schema-user';


const typeDefinitions = `
type Query {
  ${addressQueries}
  ${businessQueries}
  ${cardQueries}
  ${cardTransactionQueries}
  ${colorQueries}
  ${commerceQueries}
  ${databaseQueries}
  ${dateTimeQueries}
  ${fakeQueries}
  ${financeQueries}
  ${hackerQueries}
  ${imageQueries}
  ${internetQueries}
  ${loremQueries}
  ${messageQueries}
  ${metaQueries}
  ${meetingQueries}
  ${miscQueries}
  ${numbersQueries}
  ${personQueries}
  ${phoneQueries}
  ${systemQueries}
  ${transactionQueries}
  ${userQueries}
}

schema {
  query: Query
}
`;

export default [
  typeDefinitions,
  address,
  company,
  card,
  cardTransaction,
  color,
  commerce,
  database,
  dateTime,
  fake,
  finance,
  hacker,
  image,
  internet,
  lorem,
  message,
  meta,
  meeting,
  misc,
  numbers,
  person,
  phone,
  system,
  transaction,
  user
];
