import numbers from '../fields/numbers-fields';
import nested from '../fields/nested-fields';


export default `
# Generates a list of fake numbers
type Numbers {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${numbers}
  ${nested}
}`;



export const numbersQueries = `
  # numbers takes an optional length parameter as an argument. If length is defined 1 item is returned
  Numbers (
    length: Int,
    integerFrom: Int, 
    integerTo: Int,
    doubleFrom: Int,
    doubleTo: Int,
    arrayOfDigits: Int,
    arrayOfIntegers: Int,
    arrayOfDoubles: Int,
    randomFrom: Int,
    randomTo: Int,
  ): Numbers

  NumbersList (
    length: Int!, 
    locale: String,
    integerFrom: Int, 
    integerTo: Int,
    doubleFrom: Int,
    doubleTo: Int,
    arrayOfDigits: Int,
    arrayOfIntegers: Int,
    arrayOfDoubles: Int,
    randomFrom: Int,
    randomTo: Int,
  ): [Numbers]
`;

