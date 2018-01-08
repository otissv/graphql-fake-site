import meeting from '../../fields/meeting-fields';
import nested from '../../fields/nested-fields';


export default `
# Generates a list of fake meeting data
type Meeting {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${meeting}
  ${nested}
}`;



export const meetingQueries = `
  # meeting takes an optional length parameter as an argument. If length is defined 1 item is returned
  Meeting (locale: String) : Meeting
  MeetingList (length: Int!, locale: String): [Meeting]
`;

