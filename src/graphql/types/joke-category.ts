import { GraphQLEnumType } from 'graphql';

type IJokeCategoryValues = 'nerdy' | 'explicit';

interface IJokeCategory {
  category: IJokeCategoryValues;
}

const JokeCategoryEnum = new GraphQLEnumType({
  name: 'CATEGORY',
  values: {
    NERDY: {value: 'nerdy'},
    EXPLICIT: {value: 'explicit'},
  }
});

export default JokeCategoryEnum;

export {
  IJokeCategory,
  IJokeCategoryValues
};
