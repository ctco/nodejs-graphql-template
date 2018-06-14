import * as jokes from '../../connectors/joke';
import { JokeCategoryEnum, Joke } from '../_generated/types';

const getCateogries = ({ categories }) => categories && categories.map(category => category.toUpperCase());

const byCategory = async (category: JokeCategoryEnum): Promise<Joke> => {
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
