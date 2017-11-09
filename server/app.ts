import * as Koa from 'koa';
import * as cors from 'koa-cors';
import * as convert from 'koa-convert';
import * as heartbeat from 'koa-heartbeat';
import * as Router from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { koa as middleware } from 'graphql-voyager/middleware';
import { graphqlPath, graphiqlPath, voyagerPath } from './paths';
import schema from './graphql/schema';
import logger from './logger';

const app = new Koa();

if (process.env.CORS) {
  app.use(convert(cors()));
}

const router = new Router();

if (process.env.VOYAGER) {
  router.all(`/${voyagerPath}`, middleware({
    endpointUrl: `/${graphqlPath}`,
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

router.post(`/${graphqlPath}*`, koaBody(), graphqlMiddleware);
router.get(`/${graphqlPath}*`, graphqlMiddleware);

if (process.env.GRAPHIQL) {
  router.get(`/${graphiqlPath}`, graphiqlKoa({ endpointURL: `/${graphqlPath}` }));
}

app.use(heartbeat({ path: '/healthz', body: 'up!' }));
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
