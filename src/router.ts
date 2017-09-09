import * as Router from 'koa-router';
import {koa as middleware} from 'graphql-voyager/middleware';
import graphQl from './routes/graphql';
import {graphQlPath, mountPath, voyagerPath} from './paths';

const router = new Router({
  prefix: `${mountPath}`
});

if (process.env.VOYAGER) {
  router.all(`${voyagerPath}`, middleware({
    endpointUrl: `${mountPath}/${voyagerPath}`
  }));
}

router.all(`${graphQlPath}*`, graphQl);

export default router;
