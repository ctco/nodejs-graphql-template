import envalid from 'envalid';

const { url, bool, str, port } = envalid;

const env = envalid.cleanEnv(process.env, {
  PORT: port({ default: 3001 }),
  SELF_URL: str({ devDefault: 'http://localhost:3001' }),
  NODE_ENV: str({ devDefault: 'development' }),
  JOKE_SERVICE_URL: url({ default: 'https://api.icndb.com' }),
  GRAPHQL_TRACING: bool({ default: true }),
  GRAPHIQL: bool({ default: true }),
  VOYAGER: bool({ default: true }),
  PLAYGROUND: bool({ default: true }),
  CORS: bool({ devDefault: true, default: false }),
  LOG_LEVEL: str({ default: 'info' }),
});

export default env;
