'use strict';

const swapi = require('../index');

const resouces = [
  swapi.FILMS,
  swapi.PEOPLE,
  swapi.PLANETS,
  swapi.VEHICLES,
  swapi.STARSHIPS,
  swapi.SPECIES,
];

resouces.forEach(async (resouce) => {
  const data = await swapi.get(resouce);
  data.forEach(item => console.log(item.name || item.title));
});

swapi.get('foo')
  .then(data => console.log(data.name))
  .catch(error => console.log('ERROR', error.toString()));
