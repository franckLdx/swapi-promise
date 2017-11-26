'use strict';

const index = require('../index');

require('chai').should();

describe('Swapi stream test with access to http://swapi.co', function () {
  this.timeout(20000);

  describe('Get valid resources', () => {
    const RESOURCES = new Map([
      [index.FILMS, 7],
      [index.PEOPLE, 87],
      [index.PLANETS, 61],
      [index.SPECIES, 37],
      [index.STARSHIPS, 37],
      [index.VEHICLES, 39],
    ]);

    RESOURCES.forEach((expectedCount, resourceName) => {
      it(`${resourceName} shoud have the expected items count`, async () => {
        const data = await index.get(resourceName);
        data.length.should.be.deep.equal(expectedCount);
      });
    });
  });

  describe('Get unvalid resources', () => {
    it('Asking for an unvalid resource should emit an error', async () => {
      const WRONG_RESOURCE = 'foo';
      try {
        await index.get(WRONG_RESOURCE);
        throw new Error('Should get an error');
      } catch (err) {
        err.message.should.be.deep.equal('Error while getting https://swapi.co/api/foo: 404/NOT FOUND');
      }
    });
  });
});
