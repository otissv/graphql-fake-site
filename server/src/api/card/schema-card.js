import card from '../fields/card-fields';
import nested from '../fields/nested-fields';

export default `
# Generates a list of fake cards
type Card {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${card},
  ${nested}
}`;



export const cardQueries = `
  # card takes an optional length parameter as an argument. If length is defined 1 item is returned
  Card (locale: String): Card
  CardList (length: Int!, locale: String): [Card]
`;

