import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import JokeCategoryEnum, { IJokeCategoryValues } from './joke-category';

interface IJoke {
  text: string;
  category: IJokeCategoryValues;
}

const Joke = new GraphQLObjectType({
  name: 'Joke',
  fields: () => ({
    text: {type: new GraphQLNonNull(GraphQLString)},
    category: {type: new GraphQLNonNull(JokeCategoryEnum)},
  })
});

export default Joke;

export {
  IJoke
};
