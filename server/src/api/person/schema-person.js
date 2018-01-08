import person from '../fields/person-fields';
import nested from '../fields/nested-fields';


export default `
# Generates a list of fake people
type Person {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${person}
  ${nested}
}`;



export const personQueries = `
  # person takes an optional length parameter as an argument. If length is defined 1 item is returned
  Person (length: Int): Person
  PersonList (length: Int!, locale: String) : [Person]
`;

