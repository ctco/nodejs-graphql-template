import { connectionArgs } from 'graphql-relay-tools';
import { connectTypes } from '../../connection';

const typeDef: string = `
type Vehicle implements Node {
  """
  The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
  bike".
  """
  name: String

  """
  The model or official name of this vehicle. Such as "All-Terrain Attack
  Transport".
  """
  model: String

  """The class of this vehicle, such as "Wheeled" or "Repulsorcraft"."""
  vehicleClass: String

  """The manufacturers of this vehicle."""
  manufacturers: [String]

  """The cost of this vehicle new, in Galactic Credits."""
  costInCredits: Float

  """The length of this vehicle in meters."""
  length: Float

  """The number of personnel needed to run or pilot this vehicle."""
  crew: String

  """The number of non-essential people this vehicle can transport."""
  passengers: String

  """The maximum speed of this vehicle in atmosphere."""
  maxAtmospheringSpeed: Int

  """The maximum number of kilograms that this vehicle can transport."""
  cargoCapacity: Float

  """
  The maximum length of time that this vehicle can provide consumables for its
  entire crew without having to resupply.
  """
  consumables: String
  pilotConnection${connectionArgs()}: VehiclePilotsConnection
  filmConnection${connectionArgs()}: VehicleFilmsConnection

  """The ISO 8601 date format of the time that this resource was created."""
  created: String

  """The ISO 8601 date format of the time that this resource was edited."""
  edited: String

  """The ID of an object"""
  id: ID!
}

${connectTypes('VehiclePilots', 'pilots', 'Person')}
${connectTypes('VehicleFilms', 'films', 'Film')}
`;

export default typeDef;
