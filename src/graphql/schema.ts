import * as fs from 'fs';
import * as path from 'path';
import { makeExecutableSchema } from 'graphql-tools';

import { schema as jokesSchema, resolvers as jokesResolvers } from './jokes';


const rootSchema: string = fs.readFileSync(path.join(__dirname, './query.graphqls'), 'utf8');

export default makeExecutableSchema({
  typeDefs: [rootSchema, jokesSchema],
  resolvers: { ...jokesResolvers },
});
