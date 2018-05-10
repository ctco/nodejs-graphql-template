import { byCategory } from '../models/jokes';
import { ByCategoryJokesArgs, Joke } from '../_generated/types';

const resolvers = {
  Jokes: {
    byCategory: (_, { category }: ByCategoryJokesArgs): Promise<Joke> => byCategory(category!),
  },
};

export default resolvers;
