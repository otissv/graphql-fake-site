import meta from '../../fields/meta-fields';
import user from '../../fields/user-fields';
import nested from '../../fields/nested-fields';


export default `
# Generates a list of fake meta data
type CreatedBy {
  ${user}
}

type UpdatedBy {
  ${user}
}

type Meta {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  _id:            String,
  
  ${meta}
  ${nested}
}`;



export const metaQueries = `
  # meta takes an optional length parameter as an argument. If length is defined 1 item is returned
  Meta (locale: String, 
    roles: [String]
  ) : Meta
  
  MetaList (length: Int!, 
    locale: String,
    roles: [String]
  ): [Meta]
`;

