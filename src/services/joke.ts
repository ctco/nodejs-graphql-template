import * as request from 'request-promise';
import logger from '../logger';
import { IJoke, IJokeCategoryValues } from '../graphql/types/jokes';

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
    ...payload.value,
    text: payload.value.joke,
    categories: payload.value.categories && payload.value.categories.map(cat => cat.toUpperCase()),
  };
};

export {
  getJoke
};
