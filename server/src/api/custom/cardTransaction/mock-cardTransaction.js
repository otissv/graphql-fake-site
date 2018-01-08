import casual from 'casual';
import faker from 'faker';


export default function cardTransactionMock ({ cardVendor }) {
  return {
    currencyCode:   faker.finance.currencyCode(),
    currencySymbol: faker.finance.currencySymbol(),
    currencyName:   faker.finance.currencyName(),
    cardType:       casual.card_type,
    cardNumber:     casual.card_number(cardVendor),
    cardExp:        casual.card_exp,
    cardData:       casual.card_data,
    ...faker.helpers.createCard().accountHistory[0]
  };
};
