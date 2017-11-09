import { getJoke } from '../../services/joke';
import { Joke, JokeCategory } from '../types/jokes';

const resolvers = {
  Query: {
    jokeByCategory: (_, { category }: JokeCategory): Promise<Joke> => getJoke(category),
  },
};

export default resolvers;
