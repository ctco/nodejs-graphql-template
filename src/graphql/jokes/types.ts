interface IJoke {
  text: string;
  categories: IJokeCategoryValues[];
}

interface IJokeCategory {
  category: IJokeCategoryValues;
}

type IJokeCategoryValues = 'nerdy' | 'explicit';

export {
  IJoke,
  IJokeCategory,
  IJokeCategoryValues,
};
