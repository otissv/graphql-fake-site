import address from '../fields/address-fields';
import nested from '../fields/nested-fields';

export default `
# Generates a list of fake addresses
type Address {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${address},
  ${nested},
}`;



export const addressQueries = `
  # address takes an optional length parameter as an argument. If length is defined 1 item is returned
  Address(locale: String): Address
  AddressList (length: Int!, locale: String): [Address]
`;

