import { nodeField, nodesField, connectionArgs } from 'graphql-relay-tools';
import { connectTypes } from '../../connection';

import film from './film';
import person from './person';
import planet from './planet';
import species from './species';
import starship from './starship';
import vehicle from './vehicle';

const swapi: string = `
# import * from "film"
# import * from "person"
# import * from "planet"
# import * from "species"
# import * from "starship"
# import * from "vehicle"

type Query {
  allFilms${connectionArgs()}: FilmsConnection
  film(id: ID, filmID: ID): Film

  allPeople${connectionArgs()}: PeopleConnection
  person(id: ID, personID: ID): Person
  
  allPlanets${connectionArgs()}: PlanetsConnection
  planet(id: ID, planetID: ID): Planet
  
  allSpecies${connectionArgs()}: SpeciesConnection
  species(id: ID, speciesID: ID): Species
  
  allStarships${connectionArgs()}: StarshipsConnection
  starship(id: ID, starshipID: ID): Starship
  
  allVehicles${connectionArgs()}: VehiclesConnection
  vehicle(id: ID, vehicleID: ID): Vehicle

  ${nodeField}
  ${nodesField}
}

${connectTypes('Films', 'films', 'Film')}
${connectTypes('People', 'people', 'Person')}
${connectTypes('Planets', 'planets', 'Planet')}
${connectTypes('Species', 'species', 'Species')}
${connectTypes('Starships', 'starships', 'Starship')}
${connectTypes('Vehicles', 'vehicles', 'Vehicle')}
`;

export const swapiDef = {
  swapi,
  film,
  person,
  planet,
  species,
  starship,
  vehicle,
};
