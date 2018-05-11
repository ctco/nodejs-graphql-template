import envalid from 'envalid';

const { str } = envalid;

const env = envalid.cleanEnv(process.env, {
  GRAPHQL_PATH: str({ default: 'graphql' }),
  E2E_TEST_URL: str({ default: 'http://localhost:3001' }),
});

export default env;
