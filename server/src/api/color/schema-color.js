import color from '../fields/color-fields';
import nested from '../fields/nested-fields';

export default `
# Generates a list of fake colors
type Color {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${color},
  ${nested},
}`;



export const colorQueries = `
  # color takes an optional length parameter as an argument. If length is defined 1 item is returned
  Color (locale: String) : Color
  ColorList (length: Int!, locale: String): [Color]
`;

