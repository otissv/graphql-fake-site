import user from '../../fields/user-fields';
import address from '../../fields/address-fields';
import nested from '../../fields/nested-fields';

export default `
# Generates a list of fake users
type UserAddress {
  ${address}
}

type User {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${user}
  ${nested}
}`;

export const userQueries = `
  # user takes an optional length parameter as an argument. If length is defined 1 item is returned
  User (
    locale: String, 
    roles: [String]
  ): User
  UserList (
    length: Int!, 
    locale: String, 
    roles: [String]
    ) : [User]
`;

