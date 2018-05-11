import { merge } from 'lodash';

import query from './query';
import jokes from './jokes';

export default merge(
  query,
  jokes,
);
