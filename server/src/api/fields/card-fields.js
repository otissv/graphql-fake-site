export default `
#=> "American Express"
cardType: String,

#=> "4716506247152101" (if no vendor specified then random)
cardNumber: String,

#=> "03/04"
cardExp: String,

#=> { type: "MasterCard", number: "5307558778577046", exp: "04/88", holder_name: "Jaron Gibson" }
cardData: Card,
`;