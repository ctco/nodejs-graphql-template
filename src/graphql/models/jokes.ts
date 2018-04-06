import * as jokes from '../../connectors/joke';
import { JokeCategoryEnum, Joke } from '../types';

const byCategory = async (category: JokeCategoryEnum): Promise<Joke> => {
  const randomJokeResponse = await jokes.getRandomJokeByCategory(category);
  return {
    ...randomJokeResponse,
    text: randomJokeResponse.joke,
    categories: randomJokeResponse.categories && randomJokeResponse.categories.map(category => category.toUpperCase()),
  };
};

export {
  byCategory,
};
