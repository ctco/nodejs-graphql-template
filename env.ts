import * as envalid from 'envalid';

const { url, bool, str } = envalid;

const env = envalid.cleanEnv(process.env, {
  JOKE_SERVICE_URI: url({default: 'https://api.icndb.com'}),
  GRAPHIQL: bool({devDefault: true}),
  CORS: bool({devDefault: false}),
  NODE_ENV: str({devDefault: 'development'}),
  LOG_LEVEL: str({default: 'info'}),
});

export default env;
