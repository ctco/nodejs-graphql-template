import { getJoke } from '../../services/joke';
import { IJoke } from '../types/joke';
import { IJokeCategory } from '../types/joke-category';

export default  (_, {category}: IJokeCategory): Promise<IJoke> => getJoke(category);
