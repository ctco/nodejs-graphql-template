import { merge } from 'lodash';

import { query } from './Query';
import { node } from './Node';
import { film as Film } from './Film';
import { person as Person } from './Person';
import { planet as Planet } from './Planet';
import { species as Species } from './Species';
import { starship as Starship } from './Starship';
import { vehicle as Vehicle } from './Vehicle';

const resolvers = {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
  Query: merge(query, node),
};

export default resolvers;
