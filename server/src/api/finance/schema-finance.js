import finance from '../fields/finance-fields';
import currency from '../fields/currency-fields';
import nested from '../fields/nested-fields';


export default `
# Generates a list of fake finances
type Finance {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${finance}
  ${currency}
  ${nested}
}`;



export const financeQueries = `
  # finance takes an optional length parameter as an argument. If length is defined 1 item is returned
  Finance (length: Int): Finance
  FinanceList (length: Int!, locale: String): [Finance]
`;

