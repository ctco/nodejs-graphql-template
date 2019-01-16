import { fromGlobalId } from 'graphql-relay-tools';
import { isEmpty } from 'lodash';
import { byTypeAndId } from '../../models/swapi';
import { rootConnection } from './Connection';

function rootField(idName, swapiType) {
  return (_, args) => {
    if (!isEmpty(args[idName])) {
      return byTypeAndId(swapiType, args[idName]);
    }
    
    if (!isEmpty(args.id)) {
      const globalId = fromGlobalId(args.id);
      
      if (isEmpty(globalId.id)) {
        throw new Error('No valid ID extracted from ' + args.id);
      }

      return byTypeAndId(swapiType, globalId.id);
    
    }
    
    throw new Error('must provide id or ' + idName);
  };
}

export const query = {
  allFilms: rootConnection('films'),
  allPeople: rootConnection('people'),
  allPlanets: rootConnection('planets'),
  allSpecies: rootConnection('species'),
  allStarships: rootConnection('starships'),
  allVehicles: rootConnection('vehicles'),

  film: rootField('filmID', 'films'),
  person: rootField('personID', 'people'),
  planet: rootField('planetID', 'planets'),
  species: rootField('speciesID', 'species'),
  starship: rootField('starshipID', 'starships'),
  vehicle: rootField('vehicleID', 'vehicles'),
};
