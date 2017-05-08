import {
  GraphQLObjectType,
} from 'graphql';
import JokeCategoryEnum from './types/joke-category';
import Joke from './types/joke';
import jokeResolver from './resolvers/joke';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    joke: {
      args: {
        category: {
          type: JokeCategoryEnum,
          defaultValue: 'nerdy'
        }
      },
      type: Joke,
      resolve: jokeResolver
    },
  })
});

export default Query;
