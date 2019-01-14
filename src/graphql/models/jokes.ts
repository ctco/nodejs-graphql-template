import * as jokes from '../../connectors/joke';
import { Joke, JokeCategory } from './interfaces/jokes';

const getCateogries = ({ categories }) => categories && categories.map(category => category.toUpperCase());

const byCategory = async (category: JokeCategory): Promise<Joke> => {
  const response = await jokes.getRandomJokeByCategory(category);
  return {
    ...response,
    text: response.joke,
    categories: getCateogries(response),
  };
};

const byId = async (id: Number): Promise<Joke> => {
  const response = await jokes.getJokeById(id);
  return {
    ...response,
    text: response.joke,
    categories: getCateogries(response),
  };
};

export {
  byCategory,
  byId,
};
