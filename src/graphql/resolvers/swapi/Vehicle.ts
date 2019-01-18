import { globalIdResolver } from 'graphql-relay-tools';
import { convertToNumber } from '../../models/swapi';
import { connection } from './Connection';

export const vehicle = {
  vehicleClass: vehicle => vehicle.vehicle_class,
  manufacturers: vehicle => vehicle.manufacturer.split(',').map(s => s.trim()),
  costInCredits: vehicle => convertToNumber(vehicle.cost_in_credits),
  length: vehicle => convertToNumber(vehicle.length),
  maxAtmospheringSpeed: vehicle => convertToNumber(vehicle.max_atmosphering_speed),
  cargoCapacity: vehicle => convertToNumber(vehicle.cargo_capacity),
  pilotConnection: connection('pilots'),
  filmConnection: connection('films'),
  id: globalIdResolver(),
};
