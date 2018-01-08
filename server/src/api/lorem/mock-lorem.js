import casual from 'casual';
import faker from 'faker';

export default function loremMock ({ 
  sentences = 3,
  words = 7,
  arrayOfWords = 7
}) {
  return {
    sentence:                faker.lorem.sentence(),
    sentences:               casual.sentences(sentences),
    title:                   casual.title,
    text:                    faker.lorem.text(),
    description:             casual.description,
    shortDescription:        casual.short_description,
    string:                  casual.string,
    word:                    faker.lorem.word(),
    words:                   casual.words(words),
    arrayOfWords:            casual.array_of_words(arrayOfWords),
    letter:                  faker.helpers.randomize(),
    paragraph:               faker.lorem.paragraph(),
    paragraphs:              faker.lorem.paragraphs(),
    slug:                    faker.lorem.slug(),
    lines:                   faker.lorem.lines()
  };
};
