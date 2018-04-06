import envalid from 'envalid';

const { url, bool, str, port } = envalid;

const env = envalid.cleanEnv(process.env, {
  PORT: port({ default: 3001 }),
  SELF_URL: str({ default: '' }),
  NODE_ENV: str({ devDefault: 'development' }),
  JOKE_SERVICE_URL: url({ default: 'https://api.icndb.com' }),
  GRAPHQL_ENDPOINT: str({ default: 'graphql' }),
  GRAPHQL_TRACING: bool({ default: true }),
  GRAPHIQL: bool({ default: true }),
  GRAPHIQL_ENDPOINT: str({ default: 'graphiql' }),
  VOYAGER: bool({ default: true }),
  VOYAGER_ENDPOINT: str({ default: 'voyager' }),
  PLAYGROUND: bool({ default: true }),
  PLAYGROUND_ENDPOINT: str({ default: 'playground' }),
  CORS: bool({ devDefault: true, default: false }),
  LOG_LEVEL: str({ default: 'info' }),
  LIVENESS_ENDPOINT: str({ default: 'healthz' }),
});

export default env;
