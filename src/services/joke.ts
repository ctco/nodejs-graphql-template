import * as request from 'request-promise';
import { IJoke } from '../graphql/types/joke';
import { IJokeCategoryValues } from '../graphql/types/joke-category';

const getJoke = async (category: IJokeCategoryValues): Promise<IJoke> => {
  const jokeResponse = await request(
    {
      uri: `${process.env.JOKE_SERVICE_URI}/jokes/random?limitTo=[${category}]`,
      json: true
    }
  );

  return {
    text: jokeResponse.value.joke,
    category
  };
};

export {
  getJoke
};
