import * as envalid from 'envalid';

const { url, bool } = envalid;

const env = envalid.cleanEnv(process.env, {
  JOKE_SERVICE_URI: url(),
  GRAPHIQL: bool(),
});

export default env;
