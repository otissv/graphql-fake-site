# Welcome to GraphQL Fake

Fake is a tool for generating fake data using GraphQL queries.

Fake is largely base on Faker and includes 
all of its fields as well as custom fields 
such as User, Address and Transaction.

All fields can be extended and deeply nested.

A full list of fields can be found in the 
documentation located on the right.

## Usage
Type queries into this side of the screen, and you 
will see intelligent typeaheads aware of Fake type 
schema and live syntax and validation errors 
highlighted within the text.

Fake queries typically start with a "{" character. 
Lines that starts with a are ignored.

An example Fake query might look like:

`{  
  Fake {
    _id
    firstName
    lastName
  }
}`


## Keyboard shortcuts

Run Query:  Ctrl-Enter (or press the play button above)

Auto Complete:  Ctrl-Space (or just start typing)