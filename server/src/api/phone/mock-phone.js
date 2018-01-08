import faker from 'faker';

export default function phoneMock () {
  return {
    phoneNumber:             faker.phone.phoneNumber(),
    phoneNumberFormat:       faker.phone.phoneNumberFormat(),
    phoneFormats:            faker.phone.phoneFormats()
  };
};
