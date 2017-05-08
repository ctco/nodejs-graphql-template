import * as envalid from 'envalid';

const {url, bool} = envalid;

const env = envalid.cleanEnv(process.env, {
  JOKE_SERVICE_URI: url({default: 'https://api.icndb.com'}),
  GRAPHIQL: bool({devDefault: true}),
  CORS: bool({devDefault: false}),
});

export default env;
