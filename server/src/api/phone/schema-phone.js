import phone from '../fields/phone-fields';
import nested from '../fields/nested-fields';


export default `
# Generates a list of fake phones
type Phone {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${phone}
  ${nested}
}`;



export const phoneQueries = `
  # phone takes an optional length parameter as an argument. If length is defined 1 item is returned
  Phone (length: Int): Phone
  PhoneList (length: Int!, locale: String): [Phone]
`;

