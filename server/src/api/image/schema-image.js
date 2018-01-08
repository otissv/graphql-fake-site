import image from '../fields/image-fields';
import nested from '../fields/nested-fields';

export default `
# Generates a list of fake images
type Image {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${image}
  ${nested}
}`;



export const imageQueries = `
  # image takes an optional length parameter as an argument. If length is defined 1 item is returned
  Image (locale: String): Image
  ImageList (length: Int!, locale: String): [Image]
`;

