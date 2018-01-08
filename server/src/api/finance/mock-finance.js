import casual from 'casual';
import faker from 'faker';

export default function financeMock () {
  return {
    currency:        casual.currency,
    currencyCode:    faker.finance.currencyCode(),
    currencySymbol:  faker.finance.currencySymbol(),
    currencyName:    faker.finance.account(),
    account:         faker.finance.account(),
    accountName:     faker.finance.accountName(),
    mask:            faker.finance.mask(),
    amount:          faker.finance.amount(),
    transactionType: faker.finance.transactionType(),
    bitcoinAddress:  faker.finance.bitcoinAddress(),
    iban:            faker.finance.iban(),
    bic:             faker.finance.bic()
  };
};
