import { createClient } from 'flashheart';
import logger from '../logger';
import { Joke, JokeCategoryValues } from '../graphql/types/jokes';

const http = createClient({ logger });

const getJoke = async (category: JokeCategoryValues): Promise<Joke> => {
  const uri = `${process.env.JOKE_SERVICE_URI}/jokes/random${category ? `?limitTo=[${category.toLowerCase()}]` : ''}`;

  const payload = await http.getAsync(uri);

  return {
    ...payload.value,
    text: payload.value.joke,
    categories: payload.value.categories && payload.value.categories.map(cat => cat.toUpperCase()),
  };
};

export {
  getJoke,
};
