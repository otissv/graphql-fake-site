import transaction from '../../fields/transaction-fields';
import nested from '../../fields/nested-fields';


export default `
# Generates a list of fake transactions
type Transaction {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id: String,
  
  ${transaction}
  ${nested}
}`;



export const transactionQueries = `
  # transaction takes an optional length parameter as an argument. If length is defined 1 item is returned
  Transaction (
    locale: String,
    cardVendor: String
  ): Transaction
  TransactionList (
    length: Int!,
    locale: String
    cardVendor: String
  ): [Transaction]
`;

