import * as Router from 'koa-router';
import {koa as middleware} from 'graphql-voyager/middleware';
import graphQl from './routes/graphql';

const mountPath = 'api';
const graphQlPath = 'graphql';

const router = new Router({
  prefix: `/${mountPath}`
});

if (process.env.VOYAGER) {
  router.all('/voyager', middleware({
    endpointUrl: `/${mountPath}/${graphQlPath}`
  }));
}

router.all(`/${graphQlPath}*`, graphQl);

export default router;
