'use strict';

const swapi = require('../index');

for (const resouce of [swapi.FILMS, swapi.PEOPLE, swapi.PLANETS, swapi.VEHICLES, swapi.STARSHIPS, swapi.SPECIES]) {
  swapi.get(resouce)
    .then(data => data.forEach(item => console.log(item.name)));
}

swapi.get('foo')
  .then(data => console.log(data.name))
  .catch(error => console.log('ERROR', error.toString()));
