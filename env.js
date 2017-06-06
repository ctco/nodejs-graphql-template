const envalid = require('envalid');

const env = envalid.cleanEnv(process.env, {
  JOKE_SERVICE_URI: envalid.url({default: 'https://api.icndb.com'}),
  GRAPHIQL: envalid.bool({devDefault: true}),
  CORS: envalid.bool({devDefault: true}),
  NODE_ENV: envalid.str({devDefault: 'development'}),
  LOG_LEVEL: envalid.str({default: 'info'}),
});

module.exports = env;
