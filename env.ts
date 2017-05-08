import * as envalid from 'envalid';

const {url, bool} = envalid;

const env = envalid.cleanEnv(process.env, {
  JOKE_SERVICE_URI: url(),
  GRAPHIQL: bool({devDefault: true}),
  CORS: bool({devDefault: false}),
});

export default env;
