import fs from 'fs';
import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs: string = fs.readFileSync(path.join(__dirname, './schema.graphql'), 'utf8');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
