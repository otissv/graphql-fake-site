import company from '../fields/company-fields';
import nested from '../fields/nested-fields';


export default `
# Generates a list of fake businesses
type Company {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${company},
  ${nested}
}`;



export const businessQueries = `
  # company takes an optional length parameter as an argument. If length is defined 1 item is returned
  Company (locale: String): Company
  CompanyList (length: Int!, locale: String): [Company]
`;

