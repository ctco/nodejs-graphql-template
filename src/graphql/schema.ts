import { GraphQLSchema } from 'graphql';
import query from './query';

const schema = new GraphQLSchema(
  {query}
);

export default schema;
