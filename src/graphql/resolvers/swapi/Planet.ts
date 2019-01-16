import { globalIdResolver } from 'graphql-relay-tools';
import { convertToNumber } from '../../models/swapi';
import { connection } from './Connection';

export const planet = {
  diameter: planet => convertToNumber(planet.diameter),
  rotationPeriod: planet => convertToNumber(planet.rotation_period),
  orbitalPeriod: planet => convertToNumber(planet.orbital_period),
  population: planet => convertToNumber(planet.population),
  climates: planet => planet.climate.split(',').map(s => s.trim()),
  terrains: planet => planet.terrain.split(',').map(s => s.trim()),
  surfaceWater: planet => convertToNumber(planet.surface_water),
  residentConnection: connection('residents'),
  filmConnection: connection('films'),
  id: globalIdResolver(),
};
