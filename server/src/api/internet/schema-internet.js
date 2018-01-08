import internet from '../fields/internet-fields';
import nested from '../fields/nested-fields';


export default `
# Generates a list of fake internets
type Internet {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${internet}
  ${nested}
}`;



export const internetQueries = `
  # internet takes an optional length parameter as an argument. If length is defined 1 item is returned
  Internet (locale: String): Internet
  InternetList (length: Int!, locale: String): [Internet]
`;

