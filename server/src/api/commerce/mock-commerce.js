import faker from 'faker';

export default function commerceMock () {
  return {
    department:       faker.commerce.department(),
    productName:      faker.commerce.productName(),
    price:            faker.commerce.price(),
    productAdjective: faker.commerce.productAdjective(),
    productMaterial:  faker.commerce.productMaterial(),
    product:          faker.commerce.product()
  };
};
