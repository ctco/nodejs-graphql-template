import koa from 'koa';
import koaCors from 'koa-cors';
import koaConvert from 'koa-convert';
import koaHeartbeat from 'koa-heartbeat';
import koaRouter from 'koa-router';
import koaBodyparser from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import koaMiddleware from 'graphql-voyager/middleware/koa';
const koaPlayground = require('graphql-playground-middleware-koa').default;
import costAnalysis from 'graphql-cost-analysis';
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
const graphqlMiddleware = graphqlKoa(ctx => ({
  schema,
  tracing: Boolean(process.env.GRAPHQL_TRACING),
  validationRules: [
    costAnalysis({
      variables: ctx.query,
      maximumCost: 1000,
      defaultCost: 1,
    }),
  ],
  formatError: (error) => {
    const { message, locations, path, stack } = error;
    logger.error('GraphQL error', { message, locations, path }, stack);
    return error;
  },
}));

router.post(`/${process.env.GRAPHQL_PATH}*`, koaBodyparser(), graphqlMiddleware);
router.get(`/${process.env.GRAPHQL_PATH}*`, graphqlMiddleware);

const GRAPHQL_ENDPOINT = `${process.env.SELF_URL}/${process.env.GRAPHQL_PATH}`;

// GraphQL Voyager?
if (process.env.VOYAGER) {
  router.all(`/${process.env.VOYAGER_PATH}`, koaMiddleware({
    endpointUrl: GRAPHQL_ENDPOINT,
    displayOptions: {
      sortByAlphabet: true,
    },
  }));
}

// GraphiQL?
if (process.env.GRAPHIQL) {
  router.get(
    `/${process.env.GRAPHIQL_PATH}`,
    graphiqlKoa({ endpointURL: GRAPHQL_ENDPOINT }),
  );
}

// GraphQL Playground?
if (process.env.PLAYGROUND) {
  router.all(
    `/${process.env.PLAYGROUND_PATH}`,
    koaPlayground({ endpoint: GRAPHQL_ENDPOINT }),
  );
}

// Koa Heartbeat
app.use(koaHeartbeat({ path: `/${process.env.LIVENESS_PATH}`, body: 'ok' }));

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
