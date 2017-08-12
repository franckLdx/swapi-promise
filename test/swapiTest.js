'use strict';

const index = require('../index');

require('chai').should();

describe('Swapi stream test with access to http://swapi.co', function () {
  this.timeout(20000);
  describe('Get valid resources', function () {
    const RESOURCES = new Map([
      [index.FILMS, 7],
      [index.PEOPLE, 87],
      [index.PLANETS, 61],
      [index.SPECIES, 37],
      [index.STARSHIPS, 37],
      [index.VEHICLES, 39],
    ]);
    RESOURCES.forEach((expectedCount, resourceName) => {
      it(`${resourceName} shoud have the expected items count`, async function () {
        const data = await index.get(resourceName);
        data.length.should.be.deep.equal(expectedCount);
      });
    });
  });
  describe('Get unvalid resources', function () {
    it('Asking for an unvalid resource should emit an error', function () {
      const WRONG_RESOURCE = 'foo';
      return index.get(WRONG_RESOURCE)
        .then(() => new Error('Should get an error'))
        .catch(() => 0);
    });
  });
});
