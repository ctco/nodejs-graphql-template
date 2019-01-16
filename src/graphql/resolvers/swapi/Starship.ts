import { globalIdResolver } from 'graphql-relay-tools';
import { convertToNumber } from '../../models/swapi';
import { connection } from './Connection';

export const starship = {
  starshipClass: ship => ship.starship_class,
  manufacturers: ship => ship.manufacturer.split(',').map(s => s.trim()),
  costInCredits: ship => convertToNumber(ship.cost_in_credits),
  length: ship => convertToNumber(ship.length),
  maxAtmospheringSpeed: ship => convertToNumber(ship.max_atmosphering_speed),
  hyperdriveRating: ship => convertToNumber(ship.hyperdrive_rating),
  MGLT: ship => convertToNumber(ship.MGLT),
  cargoCapacity: ship => convertToNumber(ship.cargo_capacity),
  pilotConnection: connection('pilots'),
  filmConnection: connection('films'),
  id: globalIdResolver(),
};
