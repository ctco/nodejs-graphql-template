import * as graphqlHTTP from 'koa-graphql';
import schema from '../graphql/schema-new';
import logger from '../logger';

export default graphqlHTTP({
  schema,
  graphiql: process.env.GRAPHIQL,
  formatError: error => {
    const {message, locations, path, stack} = error;
    logger.error(`GraphQL error`, {message, locations, path}, stack);
    return error;
  },
});
