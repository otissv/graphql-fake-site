'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addressMock;

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _helpersFakegql = require('../helpers-fakegql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addressMock() {

  return {
    country: _faker2.default.address.country(),
    city: _faker2.default.address.city(),
    zipCode: _faker2.default.address.zipCode(),
    streetSuffix: _faker2.default.address.streetSuffix(),
    streetPrefix: _faker2.default.address.streetPrefix(),
    streetName: _faker2.default.address.streetPrefix(),
    streetAddress: _faker2.default.address.streetAddress(),
    state: _faker2.default.address.state(),
    stateAbbr: _faker2.default.address.stateAbbr(),
    latitude: _faker2.default.address.latitude(),
    longitude: _faker2.default.address.longitude(),
    buildingNumber: _casual2.default.building_number,
    countryCode: _faker2.default.address.countryCode(),
    cityPrefix: _faker2.default.address.citySuffix(),
    citySuffix: _faker2.default.address.citySuffix(),
    room: (0, _helpersFakegql.randNumber)(1, 1000)
  };
};