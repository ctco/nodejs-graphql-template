import { makeExecutableSchema } from 'graphql-tools';
import { importSchema } from 'graphql-import';

import resolvers from './resolvers';

const typeDefs: string = importSchema('src/graphql/schema/schema.graphql');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
