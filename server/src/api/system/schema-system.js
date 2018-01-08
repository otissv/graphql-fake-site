import system from '../fields/system-fields';
import nested from '../fields/nested-fields';


export default `
# Generates a list of fake systems
type System {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${system}
  ${nested}
}`;



export const systemQueries = `
  # system takes an optional length parameter as an argument. If length is defined 1 item is returned
  System (length: Int): System
  SystemList (length: Int!, locale: String): [System]
`;

