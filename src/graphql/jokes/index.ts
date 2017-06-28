import * as fs from 'fs';
import * as path from 'path';

import resolvers from './resolvers';
import * as types from './types';

const schema: string = fs.readFileSync(path.join(__dirname, './jokes.graphqls'), 'utf8');

export {
  schema,
  resolvers,
  types,
};
