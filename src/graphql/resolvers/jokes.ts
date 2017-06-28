import { getJoke } from '../../services/joke';
import { IJoke, IJokeCategory } from '../types/jokes';


const resolvers = {
  Query: {
    jokeByCategory: (_, {category}: IJokeCategory): Promise<IJoke> => getJoke(category)
  }
};

export default resolvers;
