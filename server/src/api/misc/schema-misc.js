import misc from '../fields/misc-fields';
import nested from '../fields/nested-fields';


export default `
# Generates a list of fake misc data
type Misc {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${misc}
  ${nested}
}`;



export const miscQueries = `
  # misc takes an optional length parameter as an argument. If length is defined 1 item is returned
  Misc (length: Int): Misc
  MiscList (length: Int!, locale: String): [Misc]
`;

