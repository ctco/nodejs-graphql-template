import * as fs from 'fs';
import * as path from 'path';
import { makeExecutableSchema } from 'graphql-tools';

import { getJoke } from '../services/joke';
import { IJoke } from './types/joke';
import { IJokeCategory } from './types/joke-category';


const typeDefs = fs.readFileSync(path.join(__dirname, './query.graphqls'), 'utf8');

const resolvers = {
  Query: {
    jokeByCategory: (_, {category}: IJokeCategory): Promise<IJoke> => getJoke(category)
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
