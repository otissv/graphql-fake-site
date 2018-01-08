import faker from 'faker';

export default function systemMock () {
  return {
    mimeType:                faker.system.mimeType(),
    fileExtension:           faker.system.fileExt(),
    uuid:                    faker.random.uuid(),
    id:                      faker.random.uuid(),
    _id:                     faker.random.uuid(),
    fileName:                faker.system.fileName(),
    commonFileName:          faker.system.commonFileName(),
    commonFileType:          faker.system.commonFileType(),
    commonFileExtension:     faker.system.commonFileExt(),
    directoryPath:           faker.system.directoryPath(),
    filePath:                faker.system.filePath(),
    semver:                  faker.system.semver()
  };
};
