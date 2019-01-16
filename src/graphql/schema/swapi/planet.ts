import { connectionArgs } from 'graphql-relay-tools';
import { connectTypes } from '../../connection';

const typeDef: string = `
type Planet implements Node {
  """The name of this planet."""
  name: String

  """The diameter of this planet in kilometers."""
  diameter: Int

  """
  The number of standard hours it takes for this planet to complete a single
  rotation on its axis.
  """
  rotationPeriod: Int

  """
  The number of standard days it takes for this planet to complete a single orbit
  of its local star.
  """
  orbitalPeriod: Int

  """
  A number denoting the gravity of this planet, where "1" is normal or 1 standard
  G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
  """
  gravity: String

  """The average population of sentient beings inhabiting this planet."""
  population: Float

  """The climates of this planet."""
  climates: [String]

  """The terrains of this planet."""
  terrains: [String]

  """
  The percentage of the planet surface that is naturally occuring water or bodies
  of water.
  """
  surfaceWater: Float
  residentConnection${connectionArgs()}: PlanetResidentsConnection
  filmConnection${connectionArgs()}: PlanetFilmsConnection

  """The ISO 8601 date format of the time that this resource was created."""
  created: String

  """The ISO 8601 date format of the time that this resource was edited."""
  edited: String

  """The ID of an object"""
  id: ID!
}

${connectTypes('PlanetResidents', 'residents', 'Person')}
${connectTypes('PlanetFilms', 'films', 'Film')}
`;

export default typeDef;
