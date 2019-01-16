import { merge } from 'lodash';
import { Resolvers } from '../_generated/types';

import { query as Query } from './Query';
import { jokes as Jokes } from './Jokes';
import { joke as Joke } from './Joke';
import { node as Node } from './Node';

import swapiResolvers from './swapi';

const resolvers: Resolvers = {
  Query,
  Jokes,
  Joke,
};

export default merge(resolvers, swapiResolvers, { Node });
