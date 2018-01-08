import dateTime from '../fields/dateTime-fields';
import nested from '../fields/nested-fields';

export default `
# Generates a list of fake dateTimes
type DateTime {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${dateTime},
  ${nested}
}`;



export const dateTimeQueries = `
  # dateTime takes an optional length parameter as an argument. If length is defined 1 item is returned
  DateTime (
    locale: String,
    timeFormat: String,
    dataFormat: String,
  ): DateTime
  
  DateTimeList (
    length: Int!, locale: String,
      timeFormat: String,
    dataFormat: String,
  ): [DateTime]
`;

