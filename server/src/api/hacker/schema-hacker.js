import hacker from '../fields/hacker-fields';
import nested from '../fields/nested-fields';


export default `
# Generates a list of fake hackers
type Hacker {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${hacker}
  ${nested}
}`;



export const hackerQueries = `
  # hacker takes an optional length parameter as an argument. If length is defined 1 item is returned
  Hacker (locale: String): Hacker
  HackerList (length: Int!, locale: String): [Hacker]
`;

