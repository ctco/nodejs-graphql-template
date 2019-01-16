import { connectionArgs } from 'graphql-relay-tools';
import { connectTypes } from '../../connection';

const typeDef: string = `
type Film implements Node {
  """The title of this film."""
  title: String

  """The episode number of this film."""
  episodeID: Int

  """The opening paragraphs at the beginning of this film."""
  openingCrawl: String

  """The name of the director of this film."""
  director: String

  """The name(s) of the producer(s) of this film."""
  producers: [String]

  """The ISO 8601 date format of film release at original creator country."""
  releaseDate: String
  speciesConnection${connectionArgs()}: FilmSpeciesConnection
  starshipConnection${connectionArgs()}: FilmStarshipsConnection
  vehicleConnection${connectionArgs()}: FilmVehiclesConnection
  characterConnection${connectionArgs()}: FilmCharactersConnection
  planetConnection${connectionArgs()}: FilmPlanetsConnection

  """The ISO 8601 date format of the time that this resource was created."""
  created: String

  """The ISO 8601 date format of the time that this resource was edited."""
  edited: String

  """The ID of an object"""
  id: ID!
}

${connectTypes('FilmSpecies', 'species', 'Species')},
${connectTypes('FilmStarships', 'starships', 'Starship')},
${connectTypes('FilmVehicles', 'vehicles', 'Vehicle')},
${connectTypes('FilmCharacters', 'characters', 'Person')},
${connectTypes('FilmPlanets', 'planets', 'Planet')}
`;

export default typeDef;
