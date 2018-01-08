import commerceFields from '../fields/commerce-fields';
import nested from '../fields/nested-fields';


export default `
# Generates a list of fake commerce
type Commerce {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id: String,
  
  ${commerceFields},
  ${nested}
}`;



export const commerceQueries = `
  # commerce takes an optional length parameter as an argument. If length is defined 1 item is returned
  Commerce (locale: String): Commerce
  CommerceList (length: Int!, locale: String): [Commerce]
`;

