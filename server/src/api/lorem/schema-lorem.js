import lorem from '../fields/lorem-fields';
import nested from '../fields/nested-fields';

export default `
# Generates a list of fake lorem ipsum
type Lorem {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${lorem}
  ${nested}
}`;



export const loremQueries = `
  # lorem takes an optional length parameter as an argument. If length is defined 1 item is returned
  Lorem (
    locale: String,
    sentences: Int,
    words: Int,
    arrayOfWords: Int
    ): Lorem
  LoremList (
    length: Int!, 
    locale: String,
    sentences: Int,
    words: Int,
    arrayOfWords: Int
    ): [Lorem]
`;

