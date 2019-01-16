import { globalIdResolver } from 'graphql-relay-tools';
import { convertToNumber, byUrl } from '../../models/swapi';
import { connection } from './Connection';

export const species = {
  averageHeight: species => convertToNumber(species.average_height),
  averageLifespan: species => convertToNumber(species.average_lifespan),
  eyeColors: species => species.eye_colors.split(',').map(s => s.trim()),
  hairColors: (species) => {
    if (species.hair_colors === 'none') {
      return [];
    }

    return species.hair_colors.split(',').map(s => s.trim());
  },
  skinColors: species => species.skin_colors.split(',').map(s => s.trim()),
  homeworld: species => species.homeworld ? byUrl(species.homeworld) : null,
  personConnection: connection('people'),
  filmConnection: connection('films'),
  id: globalIdResolver(),
};
