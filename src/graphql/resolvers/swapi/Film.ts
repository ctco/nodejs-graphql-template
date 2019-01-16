import { globalIdResolver } from 'graphql-relay-tools';
import { connection } from './Connection';

export const film = {
  episodeID: film => film.episode_id,
  openingCrawl: film => film.opening_crawl,
  producers: film => film.producer.split(',').map(s => s.trim()),
  releaseDate: film => film.release_date,
  speciesConnection: connection('species'),
  starshipConnection: connection('starships'),
  vehicleConnection: connection('vehicles'),
  characterConnection: connection('characters'),
  planetConnection: connection('planets'),
  id: globalIdResolver()
};
