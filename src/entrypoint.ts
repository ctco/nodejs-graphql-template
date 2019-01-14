import path from 'path';
import fs from 'fs';
import { pickBy, identity } from 'lodash';

import paths from './paths';

const endpointsConfig = {
  graphql: `${process.env.SELF_URL}/${paths.GRAPHQL_PATH}`,
  liveness: `${process.env.SELF_URL}/${paths.LIVENESS_PATH}`,
  graphiql: process.env.GRAPHIQL && `${process.env.SELF_URL}/${paths.GRAPHIQL_PATH}`,
  playground: process.env.PLAYGROUND && `${process.env.SELF_URL}/${paths.PLAYGROUND_PATH}`,
  voyager: process.env.VOYAGER && `${process.env.SELF_URL}/${paths.VOYAGER_PATH}`,
};

const packageJsonPath = path.resolve('package.json');
let packageJson: any = {};

if (fs.existsSync(packageJsonPath)) {
  packageJson = require(packageJsonPath);
}

const entryPointConfig: any = {
  name: packageJson.name,
  description: packageJson.description,
  repository: packageJson.repository,
  endpoints: pickBy(endpointsConfig, identity),
};

const entryPoint = async (ctx) => {
  ctx.body = entryPointConfig;
};

export {
  entryPoint,
};
