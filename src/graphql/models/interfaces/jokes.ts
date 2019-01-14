export type JokeCategory = 'NERDY' | 'EXPLICIT';

export interface Jokes {}

export interface Joke {
  id: string;
  text: string;
  categories: JokeCategory[];
}
