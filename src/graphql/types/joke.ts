import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';
import JokeCategoryEnum, { IJokeCategoryValues } from './joke-category';

interface IJoke {
  text: string;
  categories: IJokeCategoryValues[];
}

const Joke = new GraphQLObjectType({
  name: 'Joke',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    text: {type: new GraphQLNonNull(GraphQLString)},
    categories: {type: new GraphQLList(JokeCategoryEnum)},
  })
});

export default Joke;

export {
  IJoke
};
