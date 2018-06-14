import * as model from '../models/jokes';
import { ByCategoryJokesArgs, ByIdJokesArgs, Joke } from '../_generated/types';

const resolvers = {
  Jokes: {
    byCategory: (_, { category }: ByCategoryJokesArgs): Promise<Joke> => model.byCategory(category!),
    byId: (_, { id }: ByIdJokesArgs): Promise<Joke> => model.byId(id),
  },
};

export default resolvers;
