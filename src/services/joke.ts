import * as request from 'request-promise';
import logger from '../logger';
import { IJoke } from '../graphql/types/joke';
import { IJokeCategoryValues } from '../graphql/types/joke-category';

const getJoke = async (category: IJokeCategoryValues): Promise<IJoke> => {
  const uri =  `${process.env.JOKE_SERVICE_URI}/jokes/random${category ? `?limitTo=[${category.toLowerCase()}]` : ''}`;

  logger.verbose(`Calling Joke service`, {uri});

  const payload = await request(
    {
      uri,
      json: true
    }
  );

  logger.debug(`Joke service payload`, {uri, payload});

  return {
    text: payload.value.joke,
    categories: payload.value.categories && payload.value.categories.map(cat => cat.toUpperCase()),
  };
};

export {
  getJoke
};
