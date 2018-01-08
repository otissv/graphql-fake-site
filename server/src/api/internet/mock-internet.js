import faker from 'faker';

export default function internetMock () {
  return {
    ip:           faker.internet.ip(),
    domainName:   faker.internet.domainName(),
    url:          faker.internet.url(),
    userAgent:    faker.internet.userAgent(),
    exampleEmail: faker.internet.exampleEmail(),
    protocol:     faker.internet.protocol(),
    domainSuffix: faker.internet.domainSuffix(),
    domainWord:   faker.internet.domainWord(),
    ipv6:         faker.internet.ipv6(),
    mac:          faker.internet.mac()
  };
};
