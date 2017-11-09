interface Joke {
  text: string;
  categories: JokeCategoryValues[];
}

interface JokeCategory {
  category: JokeCategoryValues;
}

type JokeCategoryValues = 'nerdy' | 'explicit';

export {
  Joke,
  JokeCategory,
  JokeCategoryValues,
};
