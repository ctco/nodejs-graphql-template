import { merge } from 'lodash';
import { Resolvers } from '../_generated/types';

import { query as Query } from './Query';
import { jokes as Jokes } from './Jokes';
import { joke as Joke } from './Joke';

const resolvers: Resolvers = {
  Query,
  Jokes,
  Joke,
};

export default merge(resolvers);
