import * as graphqlHTTP from 'koa-graphql';
import schema from '../graphql/schema';
import logger from '../logger';

export default graphqlHTTP({
  schema,
  graphiql: process.env.GRAPHIQL,
  formatError: error => {
    const {message, locations, path} = error;
    logger.error(`GraphQL error`, {message, locations, path});
    return error;
  },
});
