'use strict';

const swapiStream = require('swapi-stream');

exports.FILMS = 'films';
exports.PEOPLE = 'people';
exports.PLANETS = 'planets';
exports.VEHICLES = 'vehicles';
exports.STARSHIPS = 'starships';
exports.SPECIES = 'species';

exports.get = function loadResource(resource) {
  return new Promise((resolve, reject) => {
    const result = [];
    const stream = swapiStream.get(resource);
    stream.on('data', data => result.push(data));
    stream.on('error', error => reject(error));
    stream.on('end', () => resolve(result));
  });
};
