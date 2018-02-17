import koa from 'koa';
import koaCors from 'koa-cors';
import koaConvert from 'koa-convert';
import koaHeartbeat from 'koa-heartbeat';
import koaRouter from 'koa-router';
import koaBodyparser from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import koaMiddleware from 'graphql-voyager/middleware/koa';
const koaPlayground = require('graphql-playground-middleware-koa').default;
import { promisifyAll } from 'bluebird';
import { Client } from 'flashheart';
import { graphqlPath, graphiqlPath, voyagerPath, playgroundPath } from './paths';
import schema from './graphql/schema';
import logger from './logger';

promisifyAll(Client.prototype);

const app = new koa();

if (process.env.CORS) {
  app.use(koaConvert(koaCors()));
}

const router = new koaRouter();

if (process.env.VOYAGER) {
  router.all(`/${voyagerPath}`, koaMiddleware({
    endpointUrl: `/${graphqlPath}`,
    displayOptions: {
      sortByAlphabet: true,
    },
  }));
}

const graphqlMiddleware = graphqlKoa({
  schema,
  tracing: Boolean(process.env.GRAPHQL_TRACING),
  formatError: (error) => {
    const { message, locations, path, stack } = error;
    logger.error(`GraphQL error`, { message, locations, path }, stack);
    return error;
  },
});

router.post(`/${graphqlPath}*`, koaBodyparser(), graphqlMiddleware);
router.get(`/${graphqlPath}*`, graphqlMiddleware);

if (process.env.GRAPHIQL) {
  router.get(`/${graphiqlPath}`, graphiqlKoa({ endpointURL: `/${graphqlPath}` }));
}

if (process.env.PLAYGROUND) {
  router.all(
    `/${playgroundPath}`,
    koaPlayground({
      endpoint: `/${graphqlPath}`,
    }),
  );
}

app.use(koaHeartbeat({ path: '/healthz', body: 'up!' }));
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
