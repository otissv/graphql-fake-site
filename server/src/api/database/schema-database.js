import database from '../fields/database-fields';
import nested from '../fields/nested-fields';

export default `
# Generates a list of fake databases
type Database {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${database},
  ${nested}
}`;



export const databaseQueries = `
  # database takes an optional length parameter as an argument. If length is defined 1 item is returned
  Database (locale: String) : Database
  DatabaseList (length: Int!, locale: String): [Database]
`;

