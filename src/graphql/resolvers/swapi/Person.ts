import { globalIdResolver } from 'graphql-relay-tools';
import { convertToNumber, byUrl } from '../../models/swapi';
import { connection } from './Connection';

export const person = {
  birthYear: person => person.birth_year,
  eyeColor: person => person.eye_color,
  hairColor: person => person.hair_color,
  height: person => convertToNumber(person.height),
  mass: person => convertToNumber(person.mass),
  skinColor: person => person.skin_color,
  homeworld: person => person.homeworld ? byUrl(person.homeworld) : null,
  species: (person) => {
    if (!person.species || person.species.length === 0) {
      return null;
    }

    return byUrl(person.species[0]);
  },
  filmConnection: connection('films'),
  starshipConnection: connection('starships'),
  vehicleConnection: connection('vehicles'),
  id: globalIdResolver(),
};
