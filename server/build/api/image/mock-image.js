'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageMock;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageMock() {
  return {
    photo: _faker2.default.image.image(),
    avatar: _faker2.default.image.avatar(),
    imageUrl: _faker2.default.image.imageUrl(),
    imageAbstract: _faker2.default.image.abstract(),
    imageAnimals: _faker2.default.image.animals(),
    imageBusiness: _faker2.default.image.business(),
    imageCats: _faker2.default.image.cats(),
    imageCity: _faker2.default.image.city(),
    imageFood: _faker2.default.image.food(),
    imageNightlife: _faker2.default.image.nightlife(),
    imageFashion: _faker2.default.image.fashion(),
    imagePeople: _faker2.default.image.people(),
    imageNature: _faker2.default.image.nature(),
    imageSports: _faker2.default.image.sports(),
    imageTechnics: _faker2.default.image.technics(),
    imageTransport: _faker2.default.image.transport(),
    dataUri: _faker2.default.image.dataUri()
  };
};