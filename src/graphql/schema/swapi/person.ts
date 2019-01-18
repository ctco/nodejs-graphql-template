import { connectionArgs } from 'graphql-relay-tools';
import { connectTypes } from '../../connection';

const typeDef: string = `
type Person implements Node {
  """The name of this person."""
  name: String

  """
  The birth year of the person, using the in-universe standard of BBY or ABY -
  Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
  a battle that occurs at the end of Star Wars episode IV: A New Hope.
  """
  birthYear: String

  """
  The eye color of this person. Will be "unknown" if not known or "n/a" if the
  person does not have an eye.
  """
  eyeColor: String

  """
  The gender of this person. Either "Male", "Female" or "unknown",
  "n/a" if the person does not have a gender.
  """
  gender: String

  """
  The hair color of this person. Will be "unknown" if not known or "n/a" if the
  person does not have hair.
  """
  hairColor: String

  """The height of the person in centimeters."""
  height: Int

  """The mass of the person in kilograms."""
  mass: Float

  """The skin color of this person."""
  skinColor: String

  """A planet that this person was born on or inhabits."""
  homeworld: Planet
  filmConnection${connectionArgs()}: PersonFilmsConnection

  """The species that this person belongs to, or null if unknown."""
  species: Species
  starshipConnection${connectionArgs()}: PersonStarshipsConnection
  vehicleConnection${connectionArgs()}: PersonVehiclesConnection

  """The ISO 8601 date format of the time that this resource was created."""
  created: String

  """The ISO 8601 date format of the time that this resource was edited."""
  edited: String

  """The ID of an object"""
  id: ID!
}

${connectTypes('PersonFilms', 'films', 'Film')}
${connectTypes('PersonStarships', 'starships', 'Starship')}
${connectTypes('PersonVehicles', 'vehicles', 'Vehicle')}
`;

export default typeDef;
