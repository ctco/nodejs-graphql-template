import * as Router from 'koa-router';
import graphQl from './routes/graphql';

const router = new Router({
    prefix: '/api'
});

router.all('/graphql', graphQl);

export default router;
