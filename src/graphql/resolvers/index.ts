import * as merge from 'lodash.merge';

import jokes from './jokes';
import stories from './life-stories';

export default merge(jokes, stories);
