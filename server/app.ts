import koa from 'koa';
import koaCors from 'koa-cors';
import koaConvert from 'koa-convert';
import koaHeartbeat from 'koa-heartbeat';
import koaRouter from 'koa-router';
import koaBodyparser from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import koaMiddleware from 'graphql-voyager/middleware/koa';
import { promisifyAll } from 'bluebird';
import { Client }  from 'flashheart';
import { graphqlPath, graphiqlPath, voyagerPath } from './paths';
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

app.use(koaHeartbeat({ path: '/healthz', body: 'up!' }));
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
