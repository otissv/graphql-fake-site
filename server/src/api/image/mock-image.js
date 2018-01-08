import faker from 'faker';

export default function imageMock () {
  return {
    photo:          faker.image.image(),
    avatar:         faker.image.avatar(),
    imageUrl:       faker.image.imageUrl(),
    imageAbstract:  faker.image.abstract(),
    imageAnimals:   faker.image.animals(),
    imageBusiness:  faker.image.business(),
    imageCats:      faker.image.cats(),
    imageCity:      faker.image.city(),
    imageFood:      faker.image.food(),
    imageNightlife: faker.image.nightlife(),
    imageFashion:   faker.image.fashion(),
    imagePeople:    faker.image.people(),
    imageNature:    faker.image.nature(),
    imageSports:    faker.image.sports(),
    imageTechnics:  faker.image.technics(),
    imageTransport: faker.image.transport(),
    dataUri:        faker.image.dataUri()
  };
};
