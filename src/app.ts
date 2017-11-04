import * as Koa from 'koa';
import * as cors from 'koa-cors';
import * as convert from 'koa-convert';
import router from './router';
import * as heartbeat from 'koa-heartbeat';

const app = new Koa();

if (process.env.CORS) {
  app.use(convert(cors()));
}
app.use(heartbeat({path: '/healthz', body: 'up!'}));
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
