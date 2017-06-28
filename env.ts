import * as envalid from 'envalid';

const { url, bool, str } = envalid;

const env = envalid.cleanEnv(process.env, {
  JOKE_SERVICE_URI: url({default: 'https://api.icndb.com'}),
  GRAPHIQL: bool({default: true}),
  CORS: bool({devDefault: true, default: false}),
  NODE_ENV: str({devDefault: 'development'}),
  LOG_LEVEL: str({default: 'info'}),
});

export default env;
