/* tslint:disable */

export interface Query {
  jokes: Jokes | null;
}

export interface Jokes {
  byCategory: Joke | null;
  byId: Joke | null;
}

export interface ByCategoryJokesArgs {
  category: JokeCategoryEnum | null;
}

export interface ByIdJokesArgs {
  id: number;
}

export type JokeCategoryEnum = "NERDY" | "EXPLICIT";

export interface Joke {
  id: string;
  text: string;
  categories: Array<JokeCategoryEnum> | null;
}
