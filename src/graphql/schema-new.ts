import { getJoke } from '../services/joke';
import { IJoke } from './types/joke';
import { IJokeCategory } from './types/joke-category';

import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  # _Joke_ definition
  type Joke {
    id: String!
    text: String!
    categories: [JokeCategoryEnum]
  }
  
  # Available joke's categories
  enum JokeCategoryEnum {
    NERDY
    EXPLICIT
  }
  
  # Root _Query_ definition
  type Query {
    # Get _Joke_ by category
    jokeByCategory(category: JokeCategoryEnum): Joke
  }
`;

const resolvers = {
  Query: {
    jokeByCategory: (_, {category}: IJokeCategory): Promise<IJoke> => getJoke(category)
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
