import * as jokes from '../../connectors/joke';
import { Joke, JokeCategoryValues } from '../../graphql/types/jokes';

const byCategory = async (category: JokeCategoryValues): Promise<Joke> => {
  const response = await jokes.getRandomJokeByCategory(category);
  return {
    ...response,
    text: response.joke,
    categories: response.categories && response.categories.map(cat => cat.toUpperCase()),
  };
};

export {
  byCategory,
};
