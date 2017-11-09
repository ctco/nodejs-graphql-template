import * as fs from 'fs';
import * as path from 'path';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs: string = fs.readFileSync(path.join(__dirname, './schema.graphqls'), 'utf8');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
