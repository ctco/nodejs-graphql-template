import * as graphqlHTTP from 'koa-graphql';
import schema from '../graphql/schema';

export default graphqlHTTP({
  schema,
  graphiql: process.env.GRAPHIQL
});
