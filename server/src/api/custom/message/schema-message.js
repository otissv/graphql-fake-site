import message from '../../fields/message-fields';
import nested from '../../fields/nested-fields';


export default `
# Generates a list of fake messages
type Message {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${message},
  ${nested}
}`;



export const messageQueries = `
  # message takes an optional length parameter as an argument. If length is defined 1 item is returned
  Message (locale: String) : Message
  MessageList (length: Int!, locale: String): [Message]
`;

