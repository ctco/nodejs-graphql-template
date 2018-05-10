import { createClient } from 'flashheart';
import logger from '../logger';
import { JokeCategoryEnum } from '../graphql/_generated/types';

const http = createClient({ logger });

const getRandomJokeByCategory = async (category: JokeCategoryEnum): Promise<any> => {
  const uri = `${process.env.JOKE_SERVICE_URL}/jokes/random${category ? `?limitTo=[${category.toLowerCase()}]` : ''}`;

  const { value } = await http.getAsync(uri);

  return value;
};

export {
  getRandomJokeByCategory,
};
