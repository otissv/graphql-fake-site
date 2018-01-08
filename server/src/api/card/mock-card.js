import casual from 'casual';

export default function cardMock ({ cardVendor }) {
  return {
    cardType:   casual.card_type,
    cardNumber: casual.card_number(cardVendor),
    cardExp:    casual.card_exp,
    cardData:   casual.card_data
  };
};
