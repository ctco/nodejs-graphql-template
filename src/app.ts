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
import schema from './graphql/schema';
import logger from './logger';
import { entryPoint } from './entrypoint';

promisifyAll(Client.prototype);

const app = new koa();

const router = new koaRouter();

// Entry Point
router.get('/', entryPoint);

// CORS?
if (process.env.CORS) {
  app.use(koaConvert(koaCors()));
}

// GraphQL
const graphqlMiddleware = graphqlKoa({
  schema,
  tracing: Boolean(process.env.GRAPHQL_TRACING),
  formatError: (error) => {
    const { message, locations, path, stack } = error;
    logger.error(`GraphQL error`, { message, locations, path }, stack);
    return error;
  },
});

router.post(`/${process.env.GRAPHQL_ENDPOINT}*`, koaBodyparser(), graphqlMiddleware);
router.get(`/${process.env.GRAPHQL_ENDPOINT}*`, graphqlMiddleware);

// GraphQL Voyager?
if (process.env.VOYAGER) {
  router.all(`/${process.env.VOYAGER_ENDPOINT}`, koaMiddleware({
    endpointUrl: `/${process.env.GRAPHQL_ENDPOINT}`,
    displayOptions: {
      sortByAlphabet: true,
    },
  }));
}

// GraphiQL?
if (process.env.GRAPHIQL) {
  router.get(`/${process.env.GRAPHIQL_ENDPOINT}`, graphiqlKoa({ endpointURL: `/${process.env.GRAPHQL_ENDPOINT}` }));
}

// GraphQL Playground?
if (process.env.PLAYGROUND) {
  router.all(
    `/${process.env.PLAYGROUND_ENDPOINT}`,
    koaPlayground({
      endpoint: `/${process.env.GRAPHQL_ENDPOINT}`,
    }),
  );
}

// Koa Heartbeat
app.use(koaHeartbeat({ path: `/${process.env.LIVENESS_ENDPOINT}`, body: 'ok' }));

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
