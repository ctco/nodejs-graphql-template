import { byCategory } from '../models/jokes';
import { ByCategoryJokesArgs, Joke } from '../types';

const resolvers = {
  Query: {
    jokes: () => ({}),
  },
  Jokes: {
    byCategory: (_, { category }: ByCategoryJokesArgs): Promise<Joke> => byCategory(category!),
  },
};

export default resolvers;
