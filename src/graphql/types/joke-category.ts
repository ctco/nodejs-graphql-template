import { GraphQLEnumType } from 'graphql';

type IJokeCategoryValues = 'nerdy' | 'explicit';

interface IJokeCategory {
  category: IJokeCategoryValues;
}

const JokeCategoryEnum = new GraphQLEnumType({
  name: 'JokeCategory',
  values: {
    NERDY: {value: 'NERDY'},
    EXPLICIT: {value: 'EXPLICIT'},
  }
});

export default JokeCategoryEnum;

export {
  IJokeCategory,
  IJokeCategoryValues
};
