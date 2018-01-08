import transaction from '../../fields/transaction-fields';
import card from '../../fields/card-fields';
import nested from '../../fields/nested-fields';


export default `
# Generates a list of fake cardTransactions
type CardTransaction {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id: String,
  
  ${transaction}
  ${card}
  ${nested}
}`;



export const cardTransactionQueries = `
  # cardTransaction takes an optional length parameter as an argument. If length is defined 1 item is returned
  CardTransaction (
    locale: String, 
    cardVendor: String
  ): CardTransaction

  CardTransactionList (
    length: Int!, 
    locale: String,
    cardVendor: String
  ): [CardTransaction]
`;

