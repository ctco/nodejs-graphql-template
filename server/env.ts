import envalid from 'envalid';

const { url, bool, str } = envalid;

const env = envalid.cleanEnv(process.env, {
  JOKE_SERVICE_URI: url({ default: 'https://api.icndb.com' }),
  GRAPHIQL: bool({ default: true }),
  VOYAGER: bool({ default: true }),
  PLAYGROUND: bool({ default: true }),
  CORS: bool({ devDefault: true, default: false }),
  GRAPHQL_TRACING: bool({ default: true }),
  LOG_LEVEL: str({ default: 'info' }),
});

export default env;
