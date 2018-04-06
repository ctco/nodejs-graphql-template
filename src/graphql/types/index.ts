/* tslint:disable */

export interface Query {
  jokes: Jokes | null;
}

export interface Jokes {
  byCategory: Joke | null;
}

export interface ByCategoryJokesArgs {
  category: JokeCategoryEnum | null;
}

export type JokeCategoryEnum = "NERDY" | "EXPLICIT";

export interface Joke {
  id: string;
  text: string;
  categories: Array<JokeCategoryEnum> | null;
}
