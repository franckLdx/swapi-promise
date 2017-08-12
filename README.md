# swapi-promise

Download [swapi data](https://swapi.co/) asynchronously. [swapi-promise](https://www.npmjs.com/package/swapi-promise) do the same using stream.

## Requirement
* Node >= 8.0.0 (swapi-promise 1.x works with node 6.0.0)
* To be fan of Star Wars

## Installation
npm install --save swapi-promise

## Usage
To get films list:
```javascript
const swapi = require('swapi-promise');
const films = await swapi.get(swapi.FILMS);
films.forEach(film => console.log(film.title);
```
To get planets list:
```javascript
const swapi = require('swapi-promise');
const planets = await swapi.get(swapi.PLANETS);
planets.forEach(planet => console.log(planet.name);
```

## API
```javascript
const resources = swapi.get(<resourceName>); // resources is array of required resources
```
__resourceName__ is mandatory. It's the resource name as defined [swapi data Rest API](https://swapi.co/documentation#root). Rather than typing the name, you can use swapi constants (like shown in above examples):
* FILMS
* PEOPLE
* PLANETS
* VEHICLES
* STARSHIPS
* SPECIES

__swapi.get__ returns full data through a promise.
