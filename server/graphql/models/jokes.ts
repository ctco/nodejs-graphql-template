import * as jokes from '../../connectors/joke';
import { Joke, JokeCategoryValues } from '../../graphql/types/jokes';

const byCategory = async (category: JokeCategoryValues): Promise<Joke> => {
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
