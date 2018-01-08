'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loremMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loremMock(_ref) {
  var _ref$sentences = _ref.sentences,
      sentences = _ref$sentences === undefined ? 3 : _ref$sentences,
      _ref$words = _ref.words,
      words = _ref$words === undefined ? 7 : _ref$words,
      _ref$arrayOfWords = _ref.arrayOfWords,
      arrayOfWords = _ref$arrayOfWords === undefined ? 7 : _ref$arrayOfWords;

  return {
    sentence: _faker2.default.lorem.sentence(),
    sentences: _casual2.default.sentences(sentences),
    title: _casual2.default.title,
    text: _faker2.default.lorem.text(),
    description: _casual2.default.description,
    shortDescription: _casual2.default.short_description,
    string: _casual2.default.string,
    word: _faker2.default.lorem.word(),
    words: _casual2.default.words(words),
    arrayOfWords: _casual2.default.array_of_words(arrayOfWords),
    letter: _faker2.default.helpers.randomize(),
    paragraph: _faker2.default.lorem.paragraph(),
    paragraphs: _faker2.default.lorem.paragraphs(),
    slug: _faker2.default.lorem.slug(),
    lines: _faker2.default.lorem.lines()
  };
};