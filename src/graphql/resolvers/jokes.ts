import { byCategory } from '../models/jokes';
import { Joke, JokeCategory } from '../types/jokes';

const resolvers = {
  Query: {
    jokes: () => ({}),
  },
  Jokes: {
    byCategory: (_, { category }: JokeCategory): Promise<Joke> => byCategory(category),
  },
};

export default resolvers;
