import path from 'path';
import fs from 'fs';
import { pickBy, identity, isEmpty } from 'lodash';

const endpointsConfig = {
  graphql: `${process.env.SELF_URL}/${process.env.GRAPHQL_ENDPOINT}`,
  liveness: `${process.env.SELF_URL}/${process.env.LIVENESS_ENDPOINT}`,
  graphiql: process.env.GRAPHIQL && `${process.env.SELF_URL}/${process.env.GRAPHIQL_ENDPOINT}`,
  playground: process.env.PLAYGROUND && `${process.env.SELF_URL}/${process.env.PLAYGROUND_ENDPOINT}`,
  voyager: process.env.VOYAGER && `${process.env.SELF_URL}/${process.env.VOYAGER_ENDPOINT}`,
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
