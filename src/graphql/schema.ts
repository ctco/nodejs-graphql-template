import { makeExecutableSchema } from 'graphql-tools';
import { nodeInterface, pageInfoType } from 'graphql-relay-tools';
import { importSchema } from 'graphql-import';

import resolvers from './resolvers';

/** SWAPI schema */
import { swapiDef } from './schema/swapi';

const schemas = {
  nodeInterface,
  pageInfoType,
  ...swapiDef,
};

const typeDefs: string = importSchema('src/graphql/schema/schema.graphql', schemas);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
