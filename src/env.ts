import envalid from 'envalid';

const { url, bool, str, port } = envalid;

const env = envalid.cleanEnv(process.env, {
  PORT: port({ default: 3001 }),
  SELF_URL: str({ devDefault: 'http://localhost:3001' }),
  NODE_ENV: str({ devDefault: 'development' }),
  JOKE_SERVICE_URL: url({ default: 'https://api.icndb.com' }),
  GRAPHQL_PATH: str({ default: 'graphql' }),
  GRAPHQL_TRACING: bool({ default: true }),
  GRAPHIQL: bool({ default: true }),
  GRAPHIQL_PATH: str({ default: 'graphiql' }),
  VOYAGER: bool({ default: true }),
  VOYAGER_PATH: str({ default: 'voyager' }),
  PLAYGROUND: bool({ default: true }),
  PLAYGROUND_PATH: str({ default: 'playground' }),
  CORS: bool({ devDefault: true, default: false }),
  LOG_LEVEL: str({ default: 'info' }),
  LIVENESS_PATH: str({ default: 'healthz' }),
  E2E_TEST_URI: str({ default: 'http://localhost:3001' }),
});

export default env;
