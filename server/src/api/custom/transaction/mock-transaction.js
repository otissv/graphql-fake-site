import casual from 'casual';
import faker from 'faker';
import moment from 'moment';


export default function transactionMock ({ cardVendor }) {
  return {
    _id:            casual.uuid,
    currency:       casual.currency,
    currencyCode:   casual.currency_code,
    currencySymbol: casual.currency_symbol,
    currencyName:   casual.currency_name,
    amount:         faker.finance.amount(),
    company:        faker.company.companyName(),
    date:           moment(faker.date.past()).toISOString(),
    account:        faker.finance.account(),
    name:           faker.finance.accountName(),
    type:           faker.finance.transactionType()
  };
};
