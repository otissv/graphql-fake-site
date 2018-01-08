import casual from 'casual';
import faker from 'faker';
import { randNumber } from '../helpers-fakegql';


export default function addressMock () {

  return {
    country:        faker.address.country(),
    city:           faker.address.city(),
    zipCode:        faker.address.zipCode(), 
    streetSuffix:   faker.address.streetSuffix(),
    streetPrefix:   faker.address.streetPrefix(),
    streetName:     faker.address.streetPrefix(),
    streetAddress:  faker.address.streetAddress(),
    state:          faker.address.state(),
    stateAbbr:      faker.address.stateAbbr(),
    latitude:       faker.address.latitude(),
    longitude:      faker.address.longitude(),
    buildingNumber: casual.building_number,
    countryCode:    faker.address.countryCode(),
    cityPrefix:     faker.address.citySuffix(),
    citySuffix:     faker.address.citySuffix(),
    room:           randNumber(1, 1000)
  };
};
